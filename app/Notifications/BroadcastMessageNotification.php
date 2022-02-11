<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Mail\StudentRequestMarkdown;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class BroadcastMessageNotification extends Notification implements ShouldQueue
{
  use Queueable;

  protected $text;
  // protected $type;
  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct($text = '')
  {
      $this->text = $text;
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function via($notifiable)
  {
    return ['broadcast'];
  }

  /**
   * Get the array representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function toBroadcast($notifiable)
  {
    return new BroadcastMessage([
        'notice' => $this->text
    ]);
  }
}
