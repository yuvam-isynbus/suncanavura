<?php

namespace App\Listeners;

use App\Models\User;
use App\Events\ContactFormMessage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\BroadcastMessageNotification;
use App\Notifications\NewContactFormMessageNotification;
use App\Notifications\NewApplicationCreatedByUserNotification;

class NewContactFormMessageListener
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
    public function handle(ContactFormMessage $event)
    {
        $admins = User::admin()->get();
        $admins->each(function ($user) use ($event) {
            $user->notify(new BroadcastMessageNotification("Stigla je nova poruka s web stranice."));
        });
        $admins[0]->notify(new NewContactFormMessageNotification($event->contact));
    }
}
