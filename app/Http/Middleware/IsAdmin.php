<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;

class IsAdmin
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
        if (auth()->user() && auth()->user()->role !== 'admin') {
            // return redirect(RouteServiceProvider::HOME);
            abort(403, 'Unauthorized action.');
        }
        return $next($request);
    }
}
