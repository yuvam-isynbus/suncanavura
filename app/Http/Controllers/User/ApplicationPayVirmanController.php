<?php

namespace App\Http\Controllers\User;

use PDF;
use App\Barcode\Barcode;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

class ApplicationPayVirmanController extends Controller
{
  public function __invoke()
  {
    request()->validateWithBag('virman', ['amount' => 'numeric']);
    $img = Image::make(public_path('img/slip/uplatnica.png'));
    $user = auth()->user();
    $type = request('type') === 'worktravel' ? 'Work & travel' : 'Au pair';
    $user->load(['applications' => function($query) use ($type) {
        $query->where('type', $type);
      }]);
    // VALUTA
    $this->addMonoText($img, 'HRK', 578, 75, 'left');
    // IZNOS
    $this->addMonoText($img, '='.request('amount'), 1108, 75, 'right');
    // VALUTA I IZNOS DESNO
    $this->addTimesText($img, 'HRK '.number_format(request('amount') / 100, 2, ',', '.'), 1548, 70, 'right', 22);
    // IBAN
    $this->addMonoText($img, 'HR4724840081100342768', 578, 225, 'left');
    // IBAN DESNO
    $this->addTimesText($img, 'HR4724840081100342768', 1168, 224, 'left', 18);
    // MODEL
    $this->addMonoText($img, 'HR00', 400, 285, 'left');
    // POZIV NA BROJ
    $this->addMonoText($img, now()->format('d-m-Y'), 553, 285, 'left');
    // MODEL I POZIV NA BROJ DESNO
    $this->addTimesText($img, 'HR00  '.now()->format('d-m-Y'), 1168, 284, 'left', 18);
    // PLATITELJ
    $this->addTimesText($img, $user->name, 50, 90, 'left', 25);
    $this->addTimesText($img, $user->applications[0]->street_address, 50, 123, 'left', 25);
    $this->addTimesText($img, $user->applications[0]->postal_code.' '.$user->applications[0]->city, 50, 160, 'left', 25);
    // PRIMATELJ
    $this->addTimesText($img, 'Sunčana vura d.o.o.', 50, 300, 'left', 25);
    $this->addTimesText($img, 'Kožarska 2', 50, 336, 'left', 25);
    $this->addTimesText($img, '10000 Zagreb', 50, 380, 'left', 25);
    // OPIS PLAĆANJA
    $this->addTimesText($img, 'Uplata za uslugu work & travel', 628, 324, 'left', 20);
    // OPIS PLAĆANJA DESNO
    $this->addTimesText($img, 'Uplata za uslugu work & travel', 1168, 344, 'left', 18);

    // BARCODE
    $barcode = Image::make(Barcode::barcode(request('amount')))->resize(420, 190);
    $img->insert($barcode, 'bottom-left', 50, 135);

    // $img->save(storage_path('tmp/'.$user->applications[0]->uuid.'.jpg'));
    // return response()->file(storage_path('text_with_image2.jpg'));
    // $pdf = PDF::loadHtml('<img src="'. storage_path('text_with_image2.jpg') .'">');
    $data = (string) $img->encode('data-url');
    // $pdf = PDF::loadHtml('<img src="'. $data .'">');
    // $pdf = PDF::loadHtml('<div ><img style="width:100%" src="'. $data .'"></div>');
    $pdf = PDF::loadView('pdf.uplatnica', ['data' => $data]);
    return $pdf->stream('uplatnica.pdf');
  }

  public function addMonoText($img, $value, $x, $y, $direction)
  {
    $value = $direction === 'left' ? $value : strrev($value);
    for ($i = 0; $i < strlen($value); $i++) {
      $xx = $direction === 'left' ? $x + 25.5 * $i : $x - 25.5 * $i;
      $yy = $value[$i] === '=' || $value[$i] === '-' ? $y - 8 : $y;
      $img->text($value[$i], $xx, $yy, function ($font) use ($direction) {
        $font->file(public_path('fonts/RobotoMono-Regular.ttf'));
        $font->size(30);
        $font->color('#000');
        $font->align($direction);
        $font->valign('bottom');
        $font->angle(0);
      });
    }
  }

  public function addTimesText($img, $value, $x, $y, $direction, $fontsize)
  {
    $img->text($value, $x, $y, function ($font) use ($direction, $fontsize) {
      $font->file(public_path('fonts/times-new-roman.ttf'));
      $font->size($fontsize);
      $font->color('#000');
      $font->align($direction);
      $font->valign('bottom');
      $font->angle(0);
    });
  }
  /* function __invoke()
    {
      request()->validate(['amount' => 'numeric']);
      session()->put('virmanAmount', request('amount'));
      return redirect(route('user.application.pay'));
    } */
}
