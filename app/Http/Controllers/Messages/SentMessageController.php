<?php

namespace App\Http\Controllers\Messages;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Traits\MessageTrait;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SentMessageController extends Controller
{
  use MessageTrait;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $messages = $this->getSentMessages();
    return Inertia::render('SentMessages/Index', [
      'filters' => request()->all('search'),
      'messages' => $messages
    ]);
  }
}
