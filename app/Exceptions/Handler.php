<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
 * Prepare exception for rendering.
 *
 * @param  \Throwable  $e
 * @return \Throwable
 */
public function render($request, Throwable $exception)
{
    $response = parent::render($request, $exception);

    if ($this->thereAreErrorsInProduction($response)) {
        return \Inertia\Inertia::render('Error', [
            'status' => $response->status(),
            'message' => $exception->getMessage(),
            'home' => config('app.url'),
        ])->toResponse($request)->setStatusCode($response->status());
    } else if ($response->status() === 419) {
        return back()->with([
            'message' => 'Vrijeme je isteklo, pokušajte kasnije.',
        ]);
    }
    return $response;
}

public function thereAreErrorsInProduction($response)
{
  return !app()->environment('local') && in_array($response->status(), [500, 503, 404, 403, 401, 429]);
}
}
