<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Application;

class ApplicationPriceController extends Controller
{
  public function __invoke(Application $application)
  {
    $data = request()->validate(['price' => 'required']);
    $application->price = $data['price'];
    $application->save();
    return redirect()->back()->with('success', 'Cijena je uspješno dodana');
  }
}
