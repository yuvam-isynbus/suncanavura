<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        $redirect = auth()->user()->role === 'admin'
          ? 'admin/dashboard'
          : 'user/dashboard';

        return $request->wantsJson()
          ? response()->json(['two_factor' => false])
          // : redirect()->intended(config('fortify.home'));
          : redirect()->intended($redirect);
    }
}
