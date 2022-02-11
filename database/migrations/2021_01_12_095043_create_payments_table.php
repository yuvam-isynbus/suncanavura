<?php

use App\Models\Payment;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->nullable();
            $table->integer('amount');
            $table->string('language')->nullable();
            $table->string('approval_code')->nullable();
            $table->string('signature')->nullable();
            $table->date('payment_date');
            $table->string('type');
            $table->string('status')->default(Payment::PENDING);
            $table->bigInteger('application_id')->unsigned()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
