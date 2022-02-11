<?php

namespace App\Listeners;

use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\NewVerifiedUserNotification;
use App\Notifications\BroadcastMessageNotification;

class NewVerifiedUserListener
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
    public function handle(Verified $event)
    {
        // ray($event->user);

        $admins = User::admin()->get();
        $admins->each(function($user){
            $user->notify(new BroadcastMessageNotification("Verificiran je novi korisnik"));
        });
        $admins[0]->notify(new NewVerifiedUserNotification($event->user));
    }
}
