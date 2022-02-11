<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Redirecting...</title>
</head>

<body onload="document.forms[0].submit();">
    {{-- <form action="https://test-wallet.corvuspay.com/checkout/" method="post"> --}}
    @if (app()->environment() === 'production')
        <form action="https://wallet.corvuspay.com/checkout/" method="post">
    @else
        <form action="https://test-wallet.corvuspay.com/checkout/" method="post">
    @endif

    <div style="display:flex;height:100vh">
        <p style="margin:auto;">
            <svg class="mx-auto block" style="width:100px" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"
                fill="red">
                <circle cx="15" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15"
                        calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1"
                        calcMode="linear" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                    <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear"
                        repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5"
                        calcMode="linear" repeatCount="indefinite" />
                </circle>
                <circle cx="105" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15"
                        calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1"
                        calcMode="linear" repeatCount="indefinite" />
                </circle>
            </svg>
        </p>
    </div>
    @foreach ($redirectData as $key => $value)
        <input type="hidden" name="{{ $key }}" value="{{ $value }}" />
    @endforeach
    <input type="submit" value="Continue" style="display:none;" />
    {{-- <p>
            <input type="hidden" name="version" value="1.3" />
            <input type="hidden" name="store_id" value="13400" />
            <input type="hidden" name="order_number" value="sUxg72Zh8iNgbEfftOlxLpi1iu3AMN" />
            <input type="hidden" name="language" value="en" />
            <input type="hidden" name="currency" value="HRK" />
            <input type="hidden" name="amount" value="100.00" />
            <input type="hidden" name="cart" value="Donacija" />
            <input type="hidden" name="require_complete" value="false" />
            <input type="hidden" name="cardholder_name" value="Abraham" />
            <input type="hidden" name="cardholder_surname" value="Serrano" />
            <input type="hidden" name="cardholder_address" value="Explicabo Mollit qu" />
            <input type="hidden" name="cardholder_city" value="Sed ut aute ipsum u" />
            <input type="hidden" name="cardholder_zip_code" value="56758" />
            <input type="hidden" name="cardholder_country" value="Srbija" />
            <input type="hidden" name="cardholder_phone" value="+1 (385) 999-2268" />
            <input type="hidden" name="cardholder_email" value="gybunimini@mailinator.net" />
            <input type="hidden" name="signature"
                value="1b3b5b361849a76e8b6cd129fe818216933c69b168b22160f57462f03a86863e" />
            <input type="submit" value="Continue" />
        </p> --}}
    </form>
</body>

</html>
