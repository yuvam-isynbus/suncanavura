<?php

namespace App\Http\Controllers\Messages;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class DeleteReceivedMessageController extends Controller
{
  public function __invoke()
  {
    $notification = DatabaseNotification::where('id', request('id'))->first();
    $newData = array_merge($notification->data, [
      'deleted_from_receiver' => 1,
    ]);
    $notification->update([
      'data' => $newData
    ]);
    return redirect()->back()->with('success', 'Poruka je uspješno izbrisana');;
  }
}
