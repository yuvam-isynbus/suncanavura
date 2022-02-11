<?php

namespace App\Http\Controllers\Messages;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class MarkMessageAsReadController extends Controller
{
    public function __invoke()
    {
        if (auth()->user()->role === 'user') {
            DatabaseNotification::where('id', request('id'))->first()->markAsRead();;
            return redirect()->back();
        }
        $adminIds = User::admin()->pluck('id');
        DatabaseNotification::where('type', 'App\Notifications\SyncMessageNotification')
            ->whereIn('notifiable_id', $adminIds)
            ->when(request('id'), function ($query) {
                return $query->where('id', request('id'));
            })
            ->get()
            ->markAsRead();
        return redirect()->back(); //->with('success', 'Message sent');
    }
}
