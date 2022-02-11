<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\App;
use Omnipay\Omnipay;

class PaymentService
{
    public function initialize()
    {
        $gateway = Omnipay::create('\App\Corvus\Gateway');
        $gateway->initialize([
            'apiKey'   => config('corvus.key'),
            'storeId'  => config('corvus.store'),
            'testMode' => config('corvus.debug'),
            'language' => App::currentLocale(),
        ]);
        return $gateway;
    }
}
