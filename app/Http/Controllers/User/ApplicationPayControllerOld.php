<?php

namespace App\Http\Controllers\User;

use App\Barcode\Barcode;
use App\Models\User;
use Inertia\Inertia;
use Omnipay\Omnipay;
use App\Models\Payment;
use App\Models\Application;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Services\PaymentService;

class ApplicationPayControllerOld extends Controller
{
    private $paymentService;

    public function __construct(PaymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    public function show()
    {
        $barcode = '';
        $showBarcode = false;
        if (session('amount')) {
            $barcode = Barcode::barcode(session('amount'));
            $showBarcode = true;
            session()->forget('amount');
        }
        $application = Application::with('user', 'payments')->whereUserId(auth()->id())->first();
        return Inertia::render('User/Application/Pay', [
            'payments' => $application->payments
                ->transform(function($payment){
                    return [
                        'id' => $payment->id,
                        'amount' => number_format($payment->amount / 100, 2, ',', '.'),
                        'type' => $payment->type === Payment::CORVUS ? 'Kartica' : 'Virman',
                        'created_at' => $payment->created_at
                    ];
                }),
            'barcode' => $barcode,
            'showBarcode' => $showBarcode,
            'application' => $application->price
                ? array_merge($application->toArray(), [
                    'price' => number_format($application->price / 100, 2, ',', '.'),
                    'paid_amount' => number_format($application->paid_amount / 100, 2, ',', '.'),
                ])
                : $application,
        ]);
    }

    public function pay()
    {
        //  Diners Club	30569309025904	08/20	551	/
        $data = [
            'transactionId' => Str::random(10),
            'amount' => request('amount'),
            'currency' => 'HRK',
            'description' => 'Plaćanje ' . request("instalment") . '.rate',
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

    public function success(Request $request)
    {
        $purchase = $this->paymentService->initialize()->completePurchase(request()->all())->send();
        if ($purchase->isSuccessful()) {
            $payment = new Payment;
            $payment->order_number = $request['order_number'];
            $payment->language = $request['language'];
            $payment->approval_code = $request['approval_code'];
            $payment->signature = $request['signature'];
            $payment->save();

            $application = Application::with('user')->whereUserId(auth()->id())->first();
            if ($application->instalments == null) {
                $application->instalments = [1 => 1];
            } else {
                $application->instalments = [1 => 1, 2 => 1];
            }
            $application->save();
            /* $user = User::where('id', Auth::user()->id)->first();
            $user->payments = ['prva_rata' => 1];
            $user->save(); */

            return redirect()->route('user.application.pay');
        }
    }

    public function cancel()
    {
        return redirect()->route('user.application.pay');
    }
}
