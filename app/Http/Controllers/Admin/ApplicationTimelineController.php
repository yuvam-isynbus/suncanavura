<?php

namespace App\Http\Controllers\Admin;

use App\Models\Application;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\CustomStoredEvent;

class ApplicationTimelineController extends Controller
{
  public function __invoke(Application $application)
  {
    $timeline = CustomStoredEvent::where('aggregate_uuid', $application->uuid)
      ->filter(request()->only('color'))
      ->orderBy('aggregate_version', 'desc')
      ->get();
    return inertia('Admin/Applications/Timeline', [
      'application' => $application,
      'filters' => request()->all('color'),
      'timeline' => $timeline->transform(function ($event) {
        return [
          'id' => $event->id,
          'event_name' => $event::EVENTS[$event->event_class]['name'],
          'icon' => $event::EVENTS[$event->event_class]['icon'],
          'colorClass' => $event::EVENTS[$event->event_class]['colorClass'],
          'color' => $event::EVENTS[$event->event_class]['color'],
          'data' => $event->event_properties['data'],
          'user_name' => $event->meta_data['user']['name'],
          'user_email' => $event->meta_data['user']['email'],
          'created_at' => Carbon::parse($event->created_at)->diffForHumans(),
          'created_at_full' => Carbon::parse($event->created_at)->format('d. m. Y. h:i:s')
        ];
      })
    ]);
  }
}
