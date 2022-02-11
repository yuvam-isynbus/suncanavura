<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Language;
use App\Models\Application;
use App\Models\Destination;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Events\TimelineEvent;
use App\Events\ApplicationCreated;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\StorableEvents\ApplicationUpdated;
use App\Aggregates\ApplicationAggregateRoot;
use App\Http\Requests\ApplicationFormRequest;
use App\Notifications\NewApplicationNotification;
use App\Http\Services\ApplicationAggregateService;
use App\Models\Sponsor;

class ApplicationFormController extends Controller
{
    public function show()
    {
        return Inertia::render('User/Application/Show', [
            'application' => Application::with('user', 'destination')
                ->whereUserId(auth()->id())
                ->first(),
            'type' => request()->segment(2),
        ]);
    }
    public function create()
    {
        if(auth()->user()->has_application && request()->segment(2) === 'worktravel') {
            return redirect(route('user.worktravel.application'));
        }

        if(auth()->user()->has_aupair && request()->segment(2) === 'aupair') {
            return redirect(route('user.aupair.application'));
        }

        return Inertia::render('User/Application/Create', [
            'application' => Application::with('user')
                ->whereUserId(auth()->id())
                ->first(),
            'type' => request()->segment(2) === 'worktravel' ? Application::WORKTRAVEL : Application::AUPAIR,
            'languages' => Language::all()
                ->transform(function ($language) {
                    return [
                        'value' => $language->name,
                        'label' => $language->name,
                    ];
                }),
            'destinations' => Destination::all()
                ->transform(function ($destination) {
                    return [
                        'id' => $destination->id,
                        'name' => $destination->name,
                    ];
                })->prepend([
                    'id' => 0,
                    'name' => 'Destinacija nije unesena',
                ]),
        ]);
    }

    public function store(
        ApplicationFormRequest $request,
        ApplicationAggregateService $applicationAggregateService
    ) {
        $user = auth()->user()->role == 'admin'
            ? User::find(request('user_id'))
            : auth()->user();

        $application = Application::create(array_merge($request->validated(), [
            'user_id' => $user->id
        ]));
        $application->type === 'Work & travel'
            ? $user->update(['has_application' => true])
            : $user->update(['has_aupair' => true]);
        $data = Arr::except($application->toArray(), ['id', 'uuid', 'user_id', 'created_at', 'updated_at']);
        if (array_key_exists('sponsor_id', $data) && request('sponsor_id') > 0) {
            $data['sponsor_id'] = Sponsor::where('id', request('sponsor_id'))->first()->name;
        }
        if (array_key_exists('destination_id', $data)  && request('destination_id') > 0) {
            $data['destination_id'] = Destination::where('id', request('destination_id'))->first()->name;
        }
        $createBy = auth()->user()->role === 'admin'
            ? 'createApplicationByAdmin'
            : 'createApplicationByUser';
        $applicationAggregateService->record($createBy, $application, $data);
        $type = $application->type === 'Work & travel' ? 'worktravel' : 'aupair';
        if (!$user->entered_by_admin) {
            $user->notify(new NewApplicationNotification($user, $type));
        }
        if (auth()->user()->role == 'user') {
            event(new ApplicationCreated(auth()->user(), $type));
        }

        return auth()->user()->role == 'admin'
            ? redirect(route('admin.users.show', request('user_id')))->with('status', 'Vaša prijava je uspješno poslana. Hvala.')
            : redirect()->route('user.' . $type . '.application')->with('status', 'Vaša prijava je uspješno poslana. Hvala.');
    }

    public function edit(Application $application)
    {
        return Inertia::render('User/Application/Edit', [
            /* 'application' => Application::with('user')
                ->whereUserId(auth()->id())
                ->first(), */
            'application' => $application,
            'type' => request()->segment(2) === 'worktravel' ? Application::WORKTRAVEL : Application::AUPAIR,
            'languages' => Language::all()
                ->transform(function ($language) {
                    return [
                        'value' => $language->name,
                        'label' => $language->name,
                    ];
                }),
            'destinations' => Destination::all()
                ->transform(function ($destination) {
                    return [
                        'id' => $destination->id,
                        'name' => $destination->name,
                    ];
                })->prepend([
                    'id' => 0,
                    'name' => 'Destinacija nije unesena',
                ]),
        ]);
    }

    public function update(
        ApplicationFormRequest $request,
        Application $application,
        ApplicationAggregateService $applicationAggregateService
    ) {
        if ($application->user_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }
        $application->load('sponsor', 'destination');
        $old = Arr::only($application->toArray(), array_keys($request->validated()));
        $new = $request->validated();
        $diff = array_diff(array_map('json_encode', $new), array_map('json_encode', $old));
        $update = array_map('json_decode', $diff);
        if (count($update) > 0) {
            $application->update($update);
            if (array_key_exists ('sponsor_id', $update)) {
                $old['sponsor_id'] = $application->sponsor?->name;
                $new['sponsor_id'] = Sponsor::where('id', request('sponsor_id'))->first()->name;
            }
            if (array_key_exists ('destination_id', $update)) {
                $old['destination_id'] = $application->destination?->name;
                $new['destination_id'] = Destination::where('id', request('destination_id'))->first()->name;
            }
            $data = [
                'old' => Arr::only($old, array_keys($update)),
                'new' => Arr::only($new, array_keys($update)),
            ];
            $updateBy = auth()->user()->role === 'admin'
                ? 'updateApplicationByAdmin'
                : 'updateApplicationByUser';
            $applicationAggregateService->record($updateBy, $application, $data);
        }

        $type = $application->type === 'Work & travel' ? 'worktravel' : 'aupair';
        // return redirect(route('admin.'. $type. '.applications.notes.index', $application->uuid))->with('success', 'Bilješka je uspješno kreirana.');

        $route = auth()->user()->role === 'admin'
            ? route('admin.' . $type . '.applications.show', $application->uuid)
            : route('user.' . $type . '.application');
        return redirect($route)->with('status', 'Podaci o prijavi su uspješno izmjenjeni.');
    }
}
