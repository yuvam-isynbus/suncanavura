<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Mail\StudentRequestMarkdown;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class NewContactFormMessageNotification extends Notification // implements ShouldQueue
{
    use Queueable;

    protected $contact;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
          'user_id' => null,
          'user_name' => $this->contact['full_name'],
          'email' => $this->contact['email'],
          'deleted_at' => null
        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([]);
    }
}
