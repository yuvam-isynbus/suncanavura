<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApplicationVisaController extends Controller
{
  public function __invoke()
  {
      $application = Application::with('user')
                      ->whereUserId(auth()->id())
                      ->first();
      $documents =  $application ? $application->getMedia('visa') : [];
      return Inertia::render('User/Application/Visa', [
        'application' => $application,
        'documents' => $documents
      ]);
  }
}
