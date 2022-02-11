<?php

namespace App\Http\Controllers\Admin;

use App\Models\Note;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Services\ApplicationAggregateService;

class AdminUserPaymentController extends Controller
{
  public function index(User $user)
  {
    $user->load(['payments' => function ($query) {
      $query->with('creator')->where('status', Payment::COMPLETED);
    }]);
    return inertia('Admin/Users/Payments', [
      'payments' => $user->payments
        ->transform(function ($payment) {
          return [
            'id' => $payment->id,
            'amount' => number_format($payment->amount / 100, 2, ',', '.'),
            'type' => $payment->paymentType(),
            'sub_type' => $payment->sub_type,
            'created_at' => $payment->created_at,
            'payment_date' => $payment->payment_date,
            'creator' => $payment->creator?->name,
          ];
        }),
        'user' => $user
    ]);
  }

  public function store(
    User $user,
    // ApplicationAggregateService $applicationAggregateService
  ) {
    $data = request()->validate([
      'payment_date' => ['required', 'date_format:d. m. Y.'],
      'amount' => ['required', 'numeric'],
      'type' => ['required'],
      'sub_type' => ['required'],
    ]);
    Payment::create(
      array_merge($data, [
        'user_id' => $user->id,
        'status' => Payment::COMPLETED,
        'creator_id' => auth()->id()
      ])
    );
    /* $applicationAggregateService->record('adminPayment', $application, [
      'payment_date' => $data['payment_date'],
      'type' => $data['type'],
      'amount' => number_format($data['amount'] / 100, 2, ',', '.'),
    ]); */
    return redirect(route('admin.users.payments.index', $user->id))->with('success', 'Uplata uspješno unesena.');
  }

  public function update(
    User $user,
    Payment $payment,
    // ApplicationAggregateService $applicationAggregateService
    )
  {
    $data = request()->validate([
      'payment_date' => ['required', 'date_format:d. m. Y.'],
      'amount' => ['required', 'numeric'],
      'sub_type' => ['required'],
    ]);
    // $oldAmount = $payment->amount;
    $payment->update($data);
    /* $applicationAggregateService->record('adminPaymentUpdate', $application, [
        'payment_date' => now(),
        'type' =>$payment->type,
        'old_amount' => number_format($oldAmount / 100, 2, ',', '.'),
        'new_amount' => number_format($data['amount'] / 100, 2, ',', '.'),
      ]); */
    return redirect(route('admin.users.payments.index', $user->id))->with('success', 'Izmjena je uspješno unesena.');
  }

  public function destroy(
    User $user,
    Payment $payment,
    // ApplicationAggregateService $applicationAggregateService
    )
  {
    // $oldAmount = $payment->amount;
    $payment->delete();
    /* $applicationAggregateService->record('adminPaymentDelete', $application, [
        'payment_date' => null,
        'type' =>$payment->type,
        'old_amount' => number_format($oldAmount / 100, 2, ',', '.'),
        'new_amount' => number_format(0 / 100, 2, ',', '.'),
      ]); */
    return redirect(route('admin.users.payments.index', $user->id))->with('success', 'Uplata je uspješno izbrisana.');
  }
}
