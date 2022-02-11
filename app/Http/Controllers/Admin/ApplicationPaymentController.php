<?php

namespace App\Http\Controllers\Admin;

use App\Models\Payment;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Http\Services\ApplicationAggregateService;
use Spatie\EventSourcing\StoredEvents\Models\EloquentStoredEvent;

class ApplicationPaymentController extends Controller
{
  public function index(Application $application)
  {
    $application->load(['payments' => function ($query) {
      $query->with('creator')->where('status', Payment::COMPLETED);
    }]);
    return inertia('Admin/Applications/Payments', [
      'payments' => $application->payments
        ->transform(function ($payment) {
          return [
            'id' => $payment->id,
            'amount' => number_format($payment->amount / 100, 2, ',', '.'),
/*             'type' => $payment->type === Payment::CORVUS
                                  ? 'Kartica'
                                  : ($payment->type === Payment::BANK ? 'Uplata' : 'Povrat'), */
            'type' => $payment->paymentType(),
            'sub_type' => $payment->sub_type ?? 'Internet',
            'created_at' => $payment->created_at,
            'payment_date' => $payment->payment_date,
            'creator' => $payment->creator?->name
          ];
        }),
        'application' => $application->price
        ? array_merge($application->toArray(), [
          'price' => number_format($application->price / 100, 2, ',', '.'),
          'paid_amount' => number_format($application->paid_amount / 100, 2, ',', '.'),
        ])
        : $application,
    ]);
  }

  public function store(
    Application $application,
    ApplicationAggregateService $applicationAggregateService
  ) {
    $data = request()->validate([
      'payment_date' => ['required', 'date_format:d. m. Y.'],
      'amount' => ['required', 'numeric'],
      'sub_type' => ['required'],
      'type' => ['required'],
    ]);
    Payment::create(
      array_merge($data, [
        'application_id' => $application->id,
        'status' => Payment::COMPLETED,
        'creator_id' => auth()->id()
      ])
    );
    $application->paid_amount = $data['type'] === Payment::BANK
                                ? $application->paid_amount + $data['amount']
                                : $application->paid_amount - $data['amount'];
    $application->save();
    $applicationAggregateService->record('adminPayment', $application, [
      'payment_date' => $data['payment_date'],
      'type' => $data['type'],
      'sub_type' => $data['sub_type'],
      'amount' => number_format($data['amount'] / 100, 2, ',', '.'),
    ]);
    return redirect(route('admin.applications.payments.index', $application->uuid))->with('success', 'Promjena unesena.');
  }

  public function update(Application $application, Payment $payment, ApplicationAggregateService $applicationAggregateService)
  {
    $data = request()->validate([
      'payment_date' => ['required', 'date_format:d. m. Y.'],
      'amount' => ['required', 'numeric'],
      'sub_type' => ['required'],
    ]);
    $application->paid_amount = $payment->type === Payment::BANK
                                ? $application->paid_amount + $data['amount'] - $payment->amount
                                : $application->paid_amount - $data['amount'] + $payment->amount;
    $application->save();
    $oldAmount = $payment->amount;
    $payment->update($data);
    $applicationAggregateService->record('adminPaymentUpdate', $application, [
        'payment_date' => now(),
        'type' =>$payment->type,
        'old_amount' => number_format($oldAmount / 100, 2, ',', '.'),
        'new_amount' => number_format($data['amount'] / 100, 2, ',', '.'),
      ]);
    return redirect(route('admin.applications.payments.index', $application->uuid))->with('success', 'Promjena unesena.');
  }

  public function destroy(Application $application, Payment $payment,  ApplicationAggregateService $applicationAggregateService)
  {
    $application->paid_amount = $payment->type === Payment::BANK
                                ? $application->paid_amount - $payment->amount
                                : $application->paid_amount + $payment->amount;
    $application->save();
    $oldAmount = $payment->amount;
    $payment->delete();
    $applicationAggregateService->record('adminPaymentDelete', $application, [
        'payment_date' => null,
        'type' =>$payment->type,
        'old_amount' => number_format($oldAmount / 100, 2, ',', '.'),
        'new_amount' => number_format(0 / 100, 2, ',', '.'),
      ]);
    return redirect(route('admin.applications.payments.index', $application->uuid))->with('success', 'Uplata izbrisana.');
  }
}
