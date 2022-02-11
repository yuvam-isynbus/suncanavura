<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use Omnipay\Omnipay;
use App\Virman\Virman;
use App\Models\Payment;
use App\Barcode\Barcode;
use App\Models\Application;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Services\PaymentService;
use App\Http\Services\ApplicationAggregateService;

class ApplicationPayController extends Controller
{
  private $paymentService;

  public function __construct(PaymentService $paymentService)
  {
    $this->paymentService = $paymentService;
  }

  public function show(Application $application)
  {
    // dd($application);
    $barcode = '';
    $showBarcode = false;
    if (session('barcodeAmount')) {
      $barcode = Barcode::barcode(session('barcodeAmount'));
      $showBarcode = true;
      session()->forget('barcodeAmount');
    }
    /* $virman = '';
    $showVirman = false;
    if (session('virmanAmount')) {
      $virman = $vir->virman(session('virmanAmount'));
      $showVirman = true;
      session()->forget('virmanAmount');
    } */
    /*  $application = Application::with(['user', 'payments' => function($query){
      $query->where('status', Payment::COMPLETED);
    }])->whereUserId(auth()->id())->first(); */
    $application->load(['user', 'payments' => function ($query) {
      $query->where('status', Payment::COMPLETED)->latest();
    }]);
    return Inertia::render('User/Application/Pay', [
      'payments' => $application->payments
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
      'application' => $application->price
        ? array_merge($application->toArray(), [
          'price' => number_format($application->price / 100, 2, ',', '.'),
          'paid_amount' => number_format($application->paid_amount / 100, 2, ',', '.'),
        ])
        : $application,
      'type' => $application->type === 'Work & travel' ? 'worktravel' : 'aupair'
    ]);
  }

  public function pay()
  {
    //  Diners Club	30569309025904	08/20	551	/
    request()->validateWithBag('card', ['amount' => 'numeric']);
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
      'creator_id' => auth()->id(),
      'sub_type' => Payment::USER_CARD_APPLICATION
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

  public function success(ApplicationAggregateService $applicationAggregateService)
  {
    $purchase = $this->paymentService->initialize()->completePurchase(request()->all())->send();
    if ($purchase->isSuccessful()) {
      $payment = Payment::where('order_number', request('order_number'))->first();
      $payment->approval_code = request('approval_code');
      $payment->status = Payment::COMPLETED;
      $payment->save();
      if ($payment->application) {
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
        $type = $payment->application->type === 'Work & travel' ? 'worktravel' : 'aupair';
        return redirect(route('user.' . $type . '.application.pay', $payment->application))
          ->with('status', 'Vaša uplata je uspješno zaprimljena. Hvala');
      }
      return redirect(route('user.pay'))->with('status', 'Vaša uplata je uspješno zaprimljena. Hvala');
    }
  }

  public function cancel()
  {
    $payment = Payment::where('order_number', request('order_number'))->first();
    $payment->amount = 0;
    $payment->status = Payment::CANCELED;
    $payment->save();
    if ($payment->application) {
      $type = $payment->application->type === 'Work & travel' ? 'worktravel' : 'aupair';
      return redirect(route('user.' . $type . '.application.pay', $payment->application))
        ->with('status', 'Vaša uplata je otkazana.');
    }
    return redirect(route('user.pay'))->with('status', 'Vaša uplata je otkazana.');
  }
}
