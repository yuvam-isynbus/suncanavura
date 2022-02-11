<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailNotification;

class VerifyEmail extends VerifyEmailNotification implements ShouldQueue
{
    use Queueable;

    protected function buildMailMessage($url)
    {
        return (new MailMessage)
           ->subject('Verifikacija email adrese')
           ->greeting('Dobar dan')
           ->line('Molimo vas da klikom na poveznicu verificirate svoju email adresu.')
           ->action('Verifikacija email adrese', $url)
           ->line('Ukoliko se niste registrirali, zanemarite ovu poruku.');
    }
}
