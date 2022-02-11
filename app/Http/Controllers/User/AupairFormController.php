<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Application;
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

class AupairFormController extends Controller
{
  public function create()
  {
    return Inertia::render('User/Application/Create', [
      'application' => Application::with('user')
        ->whereUserId(auth()->id())
        ->first(),
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
    $user->update(['has_application' => true]);
    $data = Arr::except($application->toArray(), ['id', 'uuid', 'user_id', 'created_at', 'updated_at']);
    $createBy = auth()->user()->role === 'admin'
      ? 'createApplicationByAdmin'
      : 'createApplicationByUser';
    $applicationAggregateService->record($createBy, $application, $data);
    if (!$user->entered_by_admin) {
      $user->notify(new NewApplicationNotification($user));
    }
    if (auth()->user()->role == 'user') {
      event(new ApplicationCreated(auth()->user()));
    }
    return auth()->user()->role == 'admin'
      ? redirect(route('admin.users.show', request('user_id')))->with('status', 'Vaša prijava je uspješno poslana. Hvala.')
      : redirect()->back()->with('status', 'Vaša prijava je uspješno poslana. Hvala.');
  }

  public function edit()
  {
    return Inertia::render('User/Application/Edit', [
      'application' => Application::with('user')
        ->whereUserId(auth()->id())
        ->first(),
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
    $old = Arr::only($application->toArray(), array_keys($request->validated()));
    $new = $request->validated();
    $diff = array_diff(array_map('json_encode', $new), array_map('json_encode', $old));
    $update = array_map('json_decode', $diff);
    if (count($update) > 0) {
      $application->update($update);
      $data = [
        'old' => Arr::only($old, array_keys($update)),
        'new' => Arr::only($new, array_keys($update)),
      ];
      $updateBy = auth()->user()->role === 'admin'
        ? 'updateApplicationByAdmin'
        : 'updateApplicationByUser';
      $applicationAggregateService->record($updateBy, $application, $data);
    }

    $route = auth()->user()->role === 'admin'
      ? route('admin.applications.show', $application->uuid)
      : route('user.application.form');
    return redirect($route)->with('status', 'Podaci o prijavi su uspješno izmjenjeni.');
  }
}
