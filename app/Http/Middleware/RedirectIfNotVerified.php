<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RedirectIfNotVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // dd(auth()->user() && ! auth()->user()->hasVerifiedEmail());
        if (
            auth()->user() &&
            auth()->user()->hasPassword() &&
            ! auth()->user()->hasVerifiedEmail() &&
            url()->current() != route('verification.notice') &&
            url()->current() != route('verification.send') &&
            $request->url() != route('logout') &&
            ! $request->has('signature') &&
            ! $request->has('expires')
        ) {
            return redirect(route('verification.notice'));
        }

        return $next($request);
    }
}
