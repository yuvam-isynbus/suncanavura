<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Payment;
use App\Barcode\Barcode;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\PaymentService;

class UserPayController extends Controller
{
  public function __construct(PaymentService $paymentService)
  {
    $this->paymentService = $paymentService;
  }

  public function show()
  {
    $barcode = '';
    $showBarcode = false;
    if (session('barcodeAmount')) {
      $barcode = Barcode::barcode(session('barcodeAmount'));
      $showBarcode = true;
      session()->forget('barcodeAmount');
    }
    return Inertia::render('User/Pay', [
      'payments' => auth()->user()->payments()
        ->where('status', Payment::COMPLETED)
        ->get()
        ->transform(function ($payment) {
          return [
            'id' => $payment->id,
            'amount' => number_format($payment->amount / 100, 2, ',', '.'),
            /* 'type' => $payment->type === Payment::CORVUS
              ? 'Kartica'
              : ($payment->type === Payment::BANK ? 'Uplata' : 'Povrat'), */
            'type' => $payment->paymentType(),
            'created_at' => $payment->created_at,
            'payment_date' => $payment->payment_date,
          ];
        }),
      'barcode' => $barcode,
      // 'virman' => $virman,
      'showBarcode' => $showBarcode,
      // 'showVirman' => $showVirman,
      /*         'application' => $application->price
          ? array_merge($application->toArray(), [
            'price' => number_format($application->price / 100, 2, ',', '.'),
            'paid_amount' => number_format($application->paid_amount / 100, 2, ',', '.'),
          ])
          : $application, */
      'type' => 'free'
    ]);
  }

  public function pay()
  {
    //  Diners Club	30569309025904	08/20	551	/
    request()->validateWithBag('card', ['amount' => 'numeric']);
    $orderNumber = Str::random(20);
    /* $application = Application::with('user')
        ->whereUserId(auth()->id())->first(); */
    $amount = (int) request('amount');
    auth()->user()->payments()->create([
      'amount' =>  $amount,
      'order_number' => $orderNumber,
      'language' => 'hr',
      'signature' => 'c9a53c3525e557da',
      'payment_date' => now(),
      'type' => Payment::CORVUS,
      'creator_id' => auth()->id(),
      'sub_type' => Payment::USER_CARD_FREE,
      // 'user_id' => auth()->id,
    ]);
    $data = [
      'transactionId' => $orderNumber,
      'amount' => number_format($amount / 100, 2, '.', ''),
      'currency' => 'HRK',
      'description' => 'Uplata Sunčanoj vuri',
      'cardholderName' => (explode(' ', auth()->user()->name))[0],
      'cardholderSurname' => (explode(' ', auth()->user()->name))[1],
      'cardholderEmail' => auth()->user()->email,
      /* 'email' => 'boris@studiovista.hr',
              'cardholderName' => $data['name'],
              'cardholderSurname' => $data['last_name'],
              'cardholderEmail' => $data['email'],
              'cardholderPhone' => $data['phone'],
              'cardholderCountry' => $data['country'],
              'cardholderAddress' => $data['address'],
              'cardholderZipCode' => $data['postal_code'],
              'cardholderCity' => $data['city'], */
    ];
    $purchaseRequest = $this->paymentService->initialize()->purchase($data);
    $purchaseResponse = $purchaseRequest->send();
    return $purchaseResponse->getRedirectResponseVIEW();
  }
}
