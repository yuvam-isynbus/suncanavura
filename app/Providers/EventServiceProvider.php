<?php

namespace App\Providers;

use App\Events\ApplicationCreated;
use App\Events\ContactFormMessage;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use App\Listeners\NewVerifiedUserListener;
use App\Listeners\NewApplicationCreatedListener;
use App\Listeners\NewContactFormMessageListener;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        Verified::class => [
            NewVerifiedUserListener::class,
        ],
        ApplicationCreated::class => [
            NewApplicationCreatedListener::class,
        ],
        ContactFormMessage::class => [
            NewContactFormMessageListener::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
