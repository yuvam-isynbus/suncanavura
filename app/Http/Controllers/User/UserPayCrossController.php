<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Payment;
use App\Barcode\Barcode;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\PaymentService;

class UserPayCrossController extends Controller
{
    public function __invoke()
    {
        $worktravelApp = auth()->user()
            ->applications()
            ->where('type', 'Work & travel')
            ->first();

        $aupairApp = auth()->user()
            ->applications()
            ->where('type', 'Au pair')
            ->first();

        $freePayments = auth()->user()->payments()
        ->where('status', Payment::COMPLETED)
        ->get();

        $payments = $freePayments->merge($worktravelApp?->payments ?? [], $aupairApp?->payments ?? []);

        return inertia('User/PayCross', [
            'payments' => $payments
                ->transform(function ($payment) {
                    return [
                        'id' => $payment->id,
                        'amount' => number_format($payment->amount / 100, 2, ',', '.'),
                        'type' => $payment->paymentType(),
                        'created_at' => $payment->created_at,
                        'payment_date' => $payment->payment_date,
                    ];
                }),
            'worktravel' => $worktravelApp?->uuid,
            'aupair' => $aupairApp?->uuid,
        ]);
    }
}
