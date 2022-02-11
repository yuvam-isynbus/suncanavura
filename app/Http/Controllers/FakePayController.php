<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Payment;
use App\Models\Application;
use Illuminate\Support\Str;
use App\Http\Services\ApplicationAggregateService;

class FakePayController extends Controller
{
  public function show()
  {
    return view('fakepay.form', [
      'order_number' => request('order_number'),
      'subtotal' =>  request('subtotal')
    ]);
  }

  public function pay()
  {
    request()->validate(['amount' => 'numeric']);
    $orderNumber = Str::random(20);
    $application = Application::with('user')
      ->whereUserId(auth()->id())->first();
    $amount = (int) request('amount');
    $application->payments()->create([
      'amount' =>  $amount,
      'order_number' => $orderNumber,
      'language' => 'hr',
      'signature' => 'c9a53c3525e557da',
      'payment_date' => now(),
      'type' => Payment::CORVUS,
      'application_id' => $application->id,
    ]);
    /* return redirect()->route('fake.pay.form', [
      'order_number' => $orderNumber,
      'amount' =>  request('amount'),
      'signature' => 'c9a53c3525e557da',
      'language' => 'hr'
    ]); */
    return Inertia::location(route('fake.pay.form', [
      'order_number' => $orderNumber,
      'amount' =>  number_format($amount / 100, 2, '.', ''),
      'signature' => 'c9a53c3525e557da',
      'language' => 'hr'
    ]));
  }

  public function success(ApplicationAggregateService $applicationAggregateService)
  {
    $payment = Payment::where('order_number', request('order_number'))->first();
    $payment->approval_code = request('approval_code');
    $payment->status = Payment::COMPLETED;
    $payment->save();
    $payment->application->paid_amount = $payment->application->paid_amount + $payment->amount;
    $payment->application->save();
    $applicationAggregateService->record(
      'userPayment',
      $payment->application,
      [
        'payment_date' => now(),
        'amount' => $payment->amount,
      ]
    );
    return redirect(route('user.application.pay'))
      ->with('status', 'Vaša uplata je uspješno zaprimljena. Hvala');
  }

  public function cancel()
  {
    $payment = Payment::where('order_number', request('order_number'))->first();
    $payment->amount = 0;
    $payment->status = Payment::CANCELED;
    $payment->save();
    return redirect(route('user.application.pay'))
      ->with('status', 'Vaša uplata je otkazan. Hvala');
  }
}
