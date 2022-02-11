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

class SendToController extends Controller
{
    public function store(User $user)
    {
      request()->validate([
          'title' => ['required'],
          'message' => ['required'],
        ]);
        $user->notify(new SyncMessageNotification(auth()->user(), request('title'), request('message'), request('attachment_id'), $massMessage = 0));
        // $user->notify(new AsyncMessageNotification());
        if ($user->role === 'admin') {
          User::admin()->get()->each(function($user){
            $user->notify(new BroadcastMessageNotification("Dobili ste novu poruku"));
          });
        } else {
          $user->notify(new BroadcastMessageNotification("Dobili ste novu poruku"));
        }
        if ($user->role === 'user') {
          $user->notify(new NewMessageNotification(auth()->user(), request('title'), request('message'), request('attachment_id')));
        }
        return request('redirect')
          ? redirect()->route(request('redirect'))->with('success', 'Poruka je uspješno poslana')
          : redirect()->back()->with('success', 'Poruka je uspješno poslana');
    }
}
