<?php

namespace App\Http\Controllers\Messages;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Notifications\MessageNotification;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewMessageNotification;
use App\Notifications\SyncMessageNotification;
use App\Notifications\BroadcastMessageNotification;

class SendToManyController extends Controller
{
    // public function store(User $user)
    public function __invoke()
    {
        request()->validate([
            'title' => ['required'],
            'message' => ['required'],
          ]);

        $users = User::query()
            ->user()
            ->filter(request()->only('search', 'application_type'))
            ->get();

        // $chunks->chunk(100)

        $delay=0;

        $users->each(function ($user) use (&$delay) {
            $user->notify(new SyncMessageNotification(
                auth()->user(), request('title'), request('message'), request('attachment_id'), 1)
            );
            $user->notify(new BroadcastMessageNotification("Dobili ste novu poruku"));
            $user->notify((new NewMessageNotification(auth()->user(), request('title'), request('message'), request('attachment_id')))->delay($delay));
            $delay += 0.5;
        });

        return redirect()->back()->with('success', 'Poruka je uspješno poslana');
    }
}
