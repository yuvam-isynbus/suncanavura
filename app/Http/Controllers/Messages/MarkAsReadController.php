<?php

namespace App\Http\Controllers\Messages;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class MarkAsReadController extends Controller
{
    public function __invoke()
    {
        $adminIds = User::admin()->pluck('id');
        DatabaseNotification::whereIn('notifiable_id', $adminIds)
            ->when(request('id'), function ($query) {
                return $query->where('id', request('id'));
            })
            ->get()
            ->markAsRead();
        return redirect()->back(); //->with('success', 'Message sent');
    }
}
