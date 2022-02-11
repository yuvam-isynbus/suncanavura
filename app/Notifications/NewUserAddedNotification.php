<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewUserAddedNotification extends Notification implements ShouldQueue
{
  use Queueable;

  protected $user;
  protected $password;

  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct(User $user, $password)
  {
    $this->user = $user;
    $this->password = $password;
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
      ->line('Registrirani ste kao korisnik aplikacije Sunčana vura.')
      ->line('Ovo su podaci potrebni za prijavu.')
      ->line('Korisničko ime: ' . $this->user->email)
      ->line('Lozinka: ' . $this->password)
      ->action('Prijavi se', url('/login'))
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
