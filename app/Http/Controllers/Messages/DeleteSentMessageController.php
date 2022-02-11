<?php

namespace App\Http\Controllers\Messages;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class DeleteSentMessageController extends Controller
{
    public function __invoke()
    {
      $adminIds = User::admin()->pluck('id');
      $notification = DatabaseNotification::whereIn('data->sender_id', $adminIds)
          ->where('id', request('id'))
          ->first();
        $newData = array_merge($notification->data, [
          'deleted_from_sender' => 1,
        ]);
        $notification->update([
          'data' => $newData
        ]);
        return redirect()->back()->with('success', 'Poruka je uspješno izbrisana');;
    }
}
