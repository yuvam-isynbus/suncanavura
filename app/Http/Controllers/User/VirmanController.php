<?php

namespace App\Http\Controllers\User;

use PDF;
use App\Barcode\Barcode;
use App\Models\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

class VirmanController extends Controller
{
    public function __invoke()
    {
      request()->validateWithBag('virman', ['amount' => 'numeric']);
      $img = Image::make(public_path('img/slip/uplatnica.png'));

        // VALUTA
        $this->addMonoText($img, 'HRK', 578, 75, 'left');
        // IZNOS
        $this->addMonoText($img, '=22644000', 1108, 75, 'right');
        // IBAN
        $this->addMonoText($img, 'HR4724840081100342768', 578, 225, 'left');
        // MODEL
        $this->addMonoText($img, 'HR00', 400, 285, 'left');
        // POZIV NA BROJ
        $this->addMonoText($img, '1234-5678', 553, 285, 'left');
        // PLATITELJ
        $this->addTimesText($img, 'Ante Mikulić', 50, 90, 'left', 25);
        $this->addTimesText($img, 'T. P. Marovića 3', 50, 126, 'left', 25);
        $this->addTimesText($img, '21000 Split', 50, 170, 'left', 25);
        // PRIMATELJ
        $this->addTimesText($img, 'Sunčana vura d.o.o.', 50, 300, 'left', 25);
        $this->addTimesText($img, 'Kožarska 2', 50, 336, 'left', 25);
        $this->addTimesText($img, '10000 Zagreb', 50, 380, 'left', 25);
        // OPIS PLAĆANJA
        $this->addTimesText($img, 'Uplata za uslugu work&travel', 628, 324, 'left', 20);

        // BARCODE
        $barcode = Image::make(Barcode::barcode(2000))->resize(420, 190);
        $img->insert($barcode, 'bottom-left', 50, 135);

        $img->save(storage_path('text_with_image2.jpg'));
        // return response()->file(storage_path('text_with_image2.jpg'));
        // $pdf = PDF::loadHtml('<img src="'. storage_path('text_with_image2.jpg') .'">');
        $data = (string) $img->encode('data-url');
        // $pdf = PDF::loadHtml('<img src="'. $data .'">');
        // $pdf = PDF::loadHtml('<div ><img style="width:100%" src="'. $data .'"></div>');
        $pdf = PDF::loadView('pdf.uplatnica', ['data' => $data ]);
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
}
