<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApplicationPayBarcodeController extends Controller
{
    function __invoke()
    {
      request()->validate(['amount' => 'numeric']);
      session()->put('barcodeAmount', request('amount'));
      return redirect(route('user.' . request('type') . '.application.pay', request('uuid')));
    }
}
