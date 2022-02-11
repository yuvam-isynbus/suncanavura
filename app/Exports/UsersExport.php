<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;

class UsersExport implements FromQuery, WithHeadings, WithMapping, ShouldAutoSize, WithStyles, WithEvents
{
    use Exportable, RegistersEventListeners;

    public function query()
    {
        return User::query()
            ->user()
            ->filter(request()->only('search', 'application_type'));
    }

    public function headings(): array
    {
        return [
            '#',
            'Ime i prezime',
            'Email',
            'Work & travel',
            'Au pair',
            // 'Created At',
        ];
    }

    public function map($user): array
    {
        return [
            $user->id,
            $user->name,
            $user->email,
            $user->has_application ? 'DA' : 'NE',
            $user->has_aupair ? 'DA' : 'NE',
            // $user->created_at->toDateTimeString(),
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],
            // 'D'  => ['font' => ['color' => ['argb' => 'EB2B02']]],
        ];
    }

    public static function afterSheet(AfterSheet $event)
    {
        // ray(get_class_methods($event->sheet));
        // $styleArray = [
        //     'borders' => [
        //         'outline' => [
        //             'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
        //             'color' => ['argb' => 'FFFF0000'],
        //         ],
        //     ],
        // ];
        // $event->sheet->getDelegate()->getStyle('B2:D8')->applyFromArray($styleArray);
        // $cellRange = 'A1:D4'; // All headers
        //$event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);
    }
}
