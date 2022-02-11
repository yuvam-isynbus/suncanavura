<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
  public function __invoke()
  {
    request()->validate([
      "full_name" => 'required',
      "email" => 'required',
      "phone" => 'required',
      "message" => 'required',
    ]);
  }
}
