<?php

namespace App\Exports;

use App\Models\Payment;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class PaymentsExport implements FromQuery, WithHeadings, WithMapping, ShouldAutoSize, WithStyles, WithColumnFormatting
{
    use Exportable;

    public function query()
    {
        return Payment::query()
            ->with('application.user')
            ->where('status', 'completed')
            // ->whereNotNull('application_id')
            ->filter(request()->only('search', 'start_date', 'end_date', 'payment_type'))
            ->orderBy('payment_date', 'DESC');
    }

    public function headings(): array
    {
        return [
            '#',
            'Datum uplate',
            'Ime korisnika',
            'Vrsta uplate',
            'Iznos',
        ];
    }

    public function map($payment): array
    {
        return [
            $payment->id,
            $payment->payment_date->format('d-m-Y'),
            $payment->application ? $payment->application->user->name : $payment->user->name,
            $this->paymentType($payment),
            number_format($payment->amount / 100, 2, '.', ''),
        ];
    }

    public function paymentType(Payment $payment) {

        if ( $payment->type === Payment::CORVUS && $payment->application_id ) {
            return 'Kartica aplikacija';
        }
        if ( $payment->type === Payment::CORVUS && $payment->user_id ) {
            return 'Kartica slobodna uplata';
        }
        if ( $payment->type === Payment::BANK  && $payment->application_id) {
            return 'Uplata aplikacija';
        }
        if ( $payment->type === Payment::BANK  && $payment->user_id) {
            return 'Slobodna uplata';
        }
        return 'Povrat';
  /*     return $payment->type === Payment::CORVUS
      ? 'Kartica'
      : ($payment->type === Payment::BANK ? 'Uplata' : 'Povrat'); */
    }

    public function columnFormats(): array
    {
        return [
            // 'B' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'E' => NumberFormat::FORMAT_NUMBER_00,
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
}
