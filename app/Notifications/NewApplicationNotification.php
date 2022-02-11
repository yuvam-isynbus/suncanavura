<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewApplicationNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $user;
    protected $type;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(User $user, $type)
    {
        $this->user = $user;
        $this->type = $type;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Nova poruka od Sunčane vure')
                    ->greeting('Dobar dan ' . $this->user->name)
                    ->line('Vaša prijava za aplikaciju work&travel je zaprimljena.')
                    ->action('Pregledaj prijavu', url(route('user.' . $this->type . '.application')))
                    ->line('Hvala Vam što koristite našu aplikaciju!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
