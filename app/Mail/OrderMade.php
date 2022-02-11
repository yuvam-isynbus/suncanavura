<?php

namespace App\Mail;

use App\Barcode\Barcode;
use App\Models\Variation;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderMade extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $order;
    public $barcode;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $order)
    {
        $this->user = $user;
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // $this->barcode = Barcode::barcode($this->order->subtotal);
        // dd($this->order->variations);
        $rows = $this->order->variations->map(function ($orderVariation) {
            $variation = Variation::where('id', $orderVariation->id)->first();
            return [
                'product_name' => $variation->product->name,
                'entries' => $variation->type->entries * $orderVariation->pivot->quantity,
                'total' => $price = $variation->type->price * $orderVariation->pivot->quantity,
            ];
        });
        return $this->markdown('emails.ordermade', [
            'rows' => $rows
        ]);
    }
}
