<?php

namespace App\Http\Controllers\Messages;

use App\Room;
use App\Landlord;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Traits\MessageTrait;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class ReceivedMessageController extends Controller
{
  use MessageTrait;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $messages = $this->getReceivedMessages();
    return Inertia::render('ReceivedMessages/Index', [
      'filters' => [
        'search' => request('search'),
        'with_deleted' => boolval(request('with_deleted'))
      ],
      'messages' => $messages,
    ]);
  }

  public function last(User $user)
  {
    return $this->getLatestMessage($user);
  }
}
