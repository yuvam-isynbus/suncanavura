<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Mail\StudentRequestMarkdown;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class SyncMessageNotification extends Notification // implements ShouldQueue
{
    use Queueable;

    protected $user;
    protected $title;
    protected $body;
    protected $attachmentId;
    protected $massMessage;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user, $title, $body, $attachmentId, $massMessage)
    {
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->attachmentId = $attachmentId;
        $this->massMessage = $massMessage;
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
          'title' => $this->title,
          'body' => $this->body,
          'attachment_id' => $this->attachmentId,
          'mass_message' => $this->massMessage,
          'sender_id' => $this->user->id,
          'sender_name' => $this->user->name,
          'receiver_id' => $notifiable->id,
          'receiver_name' => $notifiable->name,
          'deleted_from_sender' => 0,
          'deleted_from_receiver' => 0,
        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([]);
    }
}
