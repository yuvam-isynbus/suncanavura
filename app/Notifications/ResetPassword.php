<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;

class ResetPassword extends ResetPasswordNotification implements ShouldQueue
{
    use Queueable;

    protected function buildMailMessage($url)
    {
        $minutes = config('auth.passwords.'.config('auth.defaults.passwords').'.expire');
        return (new MailMessage)
        ->subject('Obavijest o promjeni lozinke')
        ->greeting('Dobar dan')
           ->line('Ova e-mail poruka Vam je poslana zato što ste poslali zahtjev za izmjenom lozinke.')
           ->action('Postavi novu lozinku', $url)
           ->line('Poveznica za izmjenu lozinke će isteći za '. $minutes .' minuta.')
           ->line('Ukoliko niste poslali zahtjev za izmjenom lozinke, zanemarite ovu poruku.');
    }
}
