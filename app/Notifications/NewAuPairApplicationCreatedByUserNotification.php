<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Mail\StudentRequestMarkdown;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class NewAuPairApplicationCreatedByUserNotification extends Notification // implements ShouldQueue
{
    use Queueable;

    protected $user;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
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
          'user_id' => $this->user->id,
          'user_name' => $this->user->name,
          'deleted_at' => null
        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([]);
    }
}
