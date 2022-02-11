<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class DeleteNoticeController extends Controller
{
  public function __invoke()
  {
    $notification = DatabaseNotification::where('id', request('id'))->first();
    $newData = array_merge($notification->data, [
      'deleted_at' => now(),
    ]);
    $notification->update([
      'data' => $newData
    ]);
    return redirect()->back()->with('success', 'Obavijest je uspješno izbrisana');
  }
}
