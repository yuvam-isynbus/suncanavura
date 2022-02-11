<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Payment;
use App\Models\Application;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Exports\PaymentsExport;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminPaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::with('user', 'creator', 'application.user')
            ->where('status', 'completed')
            // ->whereNotNull('application_id')
            ->filter(request()->only('search', 'start_date', 'end_date', 'payment_type'));

        $applicationIds = $payments->get()->pluck('application_id')->unique();
        // ray(Application::with('user')->whereIn('id', $applicationIds)->get()->pluck('user.name'));
        // $total = Application::whereIn('id', $applicationIds)->sum('price');
        $total = request('payment_type') == 'Slobodna'
            ? $payments->sum('amount')
            : Application::filter(request()->only('payment_type'))->sum('price');
        // $total = $payments->sum('amount');
        $paid = request('payment_type') == 'Slobodna'
            ? $payments->sum('amount')
            : Application::whereIn('id', $applicationIds)->sum('paid_amount');
        return inertia('Admin/Payments', [
            'total' => number_format($total / 100, 2, ',', '.'),
            'paid' => number_format($paid / 100, 2, ',', '.'),
            'filters' => request()->all('search', 'godina', 'start_date', 'end_date', 'payment_type'),
            'payments' => $payments
                ->orderBy('payment_date', 'DESC')
                ->paginate(10)
                ->transform(function ($payment) {

                    return [
                        'id' => $payment->id,
                        'payment_date' => $payment->payment_date,
                        'name' => $payment->application ? $payment->application?->user->name : $payment->user?->name,
                        //'type' => $this->paymentType($payment),
                        'type' => $payment->paymentType(),
                        'amount' => number_format($payment->amount / 100, 2, ',', '.'),
                        'uuid' => $payment->application?->uuid,
                        'user_id' => $payment->user?->id,
                        'creator' => $payment->creator?->name,
                    ];
                }),
        ]);
    }

    public function create()
    {
        // return Inertia::render('Admin/Payments/Create');
    }

    public function store(Request $request)
    {
        $data = request()->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'exists:users,email'],
            'payment_date' => ['required', 'date_format:d. m. Y.'],
            'amount' => ['required', 'numeric'],
            'type' => ['required'],
        ]);
        $user = User::where('email', $data['email'])->first();
        Payment::create(
            array_merge(Arr::except($data, ['email']), [
                'user_id' => $user->id,
                'status' => Payment::COMPLETED,
            ])
        );
        return redirect(route('admin.payments.index'))->with('success', 'Uplata je uspješno unesena.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        // $data = request()->validate([
        //   'name' => ['required', 'string'],
        // ]);
        // $payment->update($data);
        // return redirect()->back()->with('success', 'Sponzor je uspješno izmjenjen.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        // $payment->delete();
        // return redirect()->back()->with('success', 'Sponzor je uspješno izbrisan.');
    }

    public function export($format)
    {
        if ($format === 'pdf') {
            return (new PaymentsExport)->download('uplate.pdf', \Maatwebsite\Excel\Excel::DOMPDF);
        }
        return (new PaymentsExport)->download('uplate.xlsx');
    }
}
