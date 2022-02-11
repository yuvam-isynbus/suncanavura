<?php

namespace App\Http\Controllers\Messages;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class DeleteSentMassMessageController extends Controller
{
    public function __invoke()
    {
        $message = request('message');
        $messageData = $message['data'];
        $newData = array_merge($messageData, [
            'deleted_from_sender' => 1,
        ]);
        DatabaseNotification::where('data->title', $messageData['title'])
            ->update([
                'data' => $newData
            ]);
        return redirect()->back()->with('success', 'Poruka je uspješno izbrisana');;
    }
}
