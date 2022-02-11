<?php

namespace App\Http\Controllers;

use DNS2D;
use Illuminate\Http\Request;

class BarcodeController extends Controller
{
  public function __invoke()
  {
    $iznos = 12355;
    $barcode = DNS2D::getBarcodePNG('HRVHUB30
HRK
' . $iznos . '



STUDIO VISTA PLUS
T. P. MAROVIĆA 3
21000 SPLIT
HR2024070001100605828
HR00
30042020
COST
Troškovi za 1. mjesec', 'PDF417');

    return view('barcode', ['barcode' => $barcode]);
  }
}
