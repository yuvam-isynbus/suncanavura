<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Sponsor;
use App\Models\Language;
use App\Models\Application;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Spatie\EventSourcing\StoredEvents\Models\EloquentStoredEvent;

class ApplicationController extends Controller
{
    public function __construct()
    {
        // $this->middleware('remember')->only('index');
    }

    public function index()
    {
        $applicationType = request('type') === 'worktravel' ? Application::WORKTRAVEL : Application::AUPAIR;
        return Inertia::render('Admin/Applications/Index', [
            'filters' => request()->all('search', 'godina', 'birth_year', 'country', 'program', 'start_date', 'end_date'),
            'minBirthYear' => explode('-', Application::min('birth_date'))[0],
            'maxBirthYear' => explode('-', Application::max('birth_date'))[0],
            'applications' => Application::query()
                ->with('user')
                ->when($applicationType ?? null, function ($query, $type) {
                    $query->where('type', $type);
                })
                // ->orderByName()
                // ->application()
                ->filter(request()->only('search', 'godina', 'birth_year', 'country', 'program', 'start_date', 'end_date'))
                ->latest()
                ->paginate(10)
                ->transform(function ($application) {
                    return [
                        'id' => $application->id,
                        'uuid' => $application->uuid,
                        'created_at' => $application->created_at,
                        'name' => $application->user->name,
                        'city' => $application->city,
                        'university' => $application->university,
                        'country' => $application->country,
                        'program' => $application->program,
                        'sponsor' => $application->sponsor ? $application->sponsor->name : '------',
                        'birth_year' => $application->birth_date ? (new Carbon($application->birth_date))->year : '------',
                        // 'has_password' => !!$application->password,
                    ];
                }),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Applications/Create');
    }

    public function edit(Application $application)
    {
        $application->load('user');
        return Inertia::render('Admin/Applications/Edit', [
            'application' => $application,
            'sponsors' => Sponsor::all()
                ->transform(function ($sponsor) {
                    return [
                        'id' => $sponsor->id,
                        'name' => $sponsor->name,
                    ];
                })->prepend([
                    'id' => 0,
                    'name' => 'Sponzor nije unesen',
                ]),
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

            'languages' => Language::all()
                ->transform(function ($language) {
                    return [
                        'value' => $language->name,
                        'label' => $language->name,
                    ];
                }),
            'type' => $application->type
        ]);
    }

    public function show(Application $application)
    {
        $application->load('user', 'sponsor', 'destination');
        $documents = $application->getMedia('documents');
        $timeline = EloquentStoredEvent::where('aggregate_uuid', $application->uuid)
            ->orderBy('aggregate_version', 'desc')
            ->get();
        return Inertia::render('Admin/Applications/Show', [
            'application' => $application->price
                ? array_merge($application->toArray(), [
                    'price' => number_format($application->price / 100, 2, ',', '.'),
                    'paid_amount' => number_format($application->paid_amount / 100, 2, ',', '.'),
                ])
                : $application,
            'documents' => $documents,
            'timeline' => $timeline->transform(function ($event) {
                return [
                    'id' => $event->id,
                    'event_name' => last(explode('\\', $event->event_class)),
                    'created_at' => Carbon::parse($event->created_at)->diffForHumans()
                ];
            }),
            'type' => $application->type === Application::WORKTRAVEL ? 'worktravel' : 'aupair'
        ]);
    }

    public function destroy(Application $application)
    {
        $application->delete();
        return redirect(route('admin.applications.index'))->with('success', 'Application deleted.');
    }
}
