<?php

namespace App\Corvus\Message;

use Illuminate\Support\Facades\Http;
use Omnipay\Common\Message\AbstractResponse;
use Omnipay\Common\Message\RedirectResponseInterface;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\HttpFoundation\RedirectResponse as HttpRedirectResponse;

class PurchaseResponse extends AbstractResponse implements RedirectResponseInterface
{
    /**
     * Set successful to false, as transaction is not completed yet
     * @return bool
     */
    public function isSuccessful()
    {
        return false;
    }
    /**
     * {@inheritdoc}
     */
    public function isRedirect()
    {
        return true;
    }
    /**
     * {@inheritdoc}
     */
    public function getRedirectUrl()
    {
        return $this->getRequest()->getEndpoint();
    }
    /**
     * {@inheritdoc}
     */
    public function getRedirectMethod()
    {
        return 'POST';
    }
    /**
     * {@inheritdoc}
     */
    public function getRedirectData()
    {
        return $this->data;
    }

    /**
     * Automatically perform any required redirect
     *
     * This method is meant to be a helper for simple scenarios. If you want to customize the
     * redirection page, just call the getRedirectUrl() and getRedirectData() methods directly.
     *
     * @return void
     */
    public function redirect()
    {
        $this->getRedirectResponse()->send();
    }

    /**
     * @return HttpRedirectResponse|HttpResponse
     */
    public function getRedirectResponse()
    {
        $this->validateRedirect();
        if ('GET' === $this->getRedirectMethod()) {
            // return HttpRedirectResponse::create($this->getRedirectUrl());
            return new HttpRedirectResponse($this->getRedirectUrl());
        }
        $hiddenFields = '';
        foreach ($this->getRedirectData() as $key => $value) {
            $hiddenFields .= sprintf(
                '<input type="hidden" name="%1$s" value="%2$s" />',
                htmlentities($key, ENT_QUOTES, 'UTF-8', false),
                htmlentities($value, ENT_QUOTES, 'UTF-8', false)
            ) . "\n";
        }
        $output = '<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Redirecting...</title>
</head>
<body style="background-color:red" onload="document.forms[0].submit();">
    <form action="%1$s" method="post">
        <p>Redirecting to payment page...</p>
        <p>
            %2$s
            <input type="submit" value="Continue" />
        </p>
    </form>
</body>
</html>';
        $output = sprintf(
            $output,
            htmlentities($this->getRedirectUrl(), ENT_QUOTES, 'UTF-8', false),
            $hiddenFields
        );

        // return HttpResponse::create($output);
        // return new HttpResponse($output);
        return response($output);
    }

    public function getRedirectResponseVIEW()
    {
        $this->validateRedirect();
        if ('GET' === $this->getRedirectMethod()) {
            // return HttpRedirectResponse::create($this->getRedirectUrl());
            return new HttpRedirectResponse($this->getRedirectUrl());
        }
        return view('payform2', [
            'redirectData' => $this->getRedirectData()
        ]);
    }
}
