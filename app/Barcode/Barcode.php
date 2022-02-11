<?php

namespace App\Barcode;

use DNS2D;

class Barcode
{
    /**
     * Upload Chunk Files
     *
     * @param object $file
     * @param string $file_name
     * @param int $chunk_number
     * @param int $total_chunks
     * @param string $app_temp_folder
     *
     * @return string
     */
    static function barcode($iznos)
    {
        $barcode = DNS2D::getBarcodePNG('HRVHUB30
HRK
' . $iznos . '



SUNČANA VURA d.o.o.
KOŽARSKA 2
10000 ZAGREB
HR4724840081100342768
HR00
' . now()->format('d-m-Y') . '
COST
Uplata za uslugu work & travel', 'PDF417');

        return $barcode;
    }
}
