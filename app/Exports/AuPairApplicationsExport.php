<?php

namespace App\Exports;

use App\Models\Application;
use Illuminate\Support\Carbon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class AuPairApplicationsExport implements FromQuery, ShouldAutoSize, WithHeadings, WithMapping, WithStyles
{
    use Exportable;

    public function query()
    {
        return Application::query()
            ->with('user', 'destination')
            ->where('type', 'Au pair')
            ->filter(request()->only('search', 'godina', 'birth_year', 'country', 'destination', 'language', 'start_date', 'end_date'));
    }

    public function headings(): array
    {
        return [
            '#',
            'Datum prijave',
            'Korisnik',
            'Destinacija',
            'Godina rođenja',
            'Grad',
            'Država',
            'Fakultet',
        ];
    }

    public function map($application): array
    {
        return [
            $application->id,
            $application->created_at->format('d-m-Y'),
            $application->user->name,
            $application->destination ? $application->destination->name : '',
            $application->birth_date ? (new Carbon($application->birth_date))->year : '',
            $application->city,
            $application->country,
            $application->university,

        ];
    }
    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],
        ];
    }
}
