<?php

namespace App\Notifications;

use App\Mail\NewMessage;
use App\Models\Attachment;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewMessageNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $user;
    protected $title;
    protected $message;
    protected $attachmentId;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user, $title, $message, $attachmentId)
    {
        $this->user = $user;
        $this->title = $title;
        $this->message = $message;
        $this->attachmentId = $attachmentId;
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
        $attachment = Attachment::find($this->attachmentId);

        $email =  (new MailMessage)
                    ->subject('Nova poruka od Sunčane vure')
                    ->greeting('Dobar dan ' . $notifiable->name)
                    ->line('Dobili ste novu poruku od Sunčane vura.')
                    ->line('Naslov poruke:')
                    ->line($this->title)
                    ->line('Tekst poruke:')
                    ->line($this->message)
                    ->line('Poruku možete pročitati na slijedećem linku.')
                    ->action('Prijavi se', url(route('user.conversation')))
                    ->line('Hvala Vam što koristite našu aplikaciju!');

        if ($attachment) {
            foreach ($attachment->getMedia('attachments') as $media) {
                $email->attach($media->getPath());
            }
        }

        // $email->attach($attachment->getFirstMedia('attachments')->getPath());

        return $email;
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
