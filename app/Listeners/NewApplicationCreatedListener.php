<?php

namespace App\Listeners;

use App\Models\User;
use App\Events\ApplicationCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\BroadcastMessageNotification;
use App\Notifications\NewApplicationCreatedByUserNotification;
use App\Notifications\NewAuPairApplicationCreatedByUserNotification;
use App\Notifications\NewWorkTravelApplicationCreatedByUserNotification;

class NewApplicationCreatedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ApplicationCreated $event)
    {
      $admins = User::admin()->get();
      $admins->each(function($user){
          $user->notify(new BroadcastMessageNotification("Kreirana je nova aplikacija"));
      });
      $event->type === 'worktravel'
        ? $admins[0]->notify(new NewWorkTravelApplicationCreatedByUserNotification($event->user))
        : $admins[0]->notify(new NewAuPairApplicationCreatedByUserNotification($event->user));
    }
}
