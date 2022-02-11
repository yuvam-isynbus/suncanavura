<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('uuid');
            $table->integer('price')->nullable();
            $table->integer('paid_amount')->default(0);
            $table->date('birth_date');
            $table->string('id_number');
            $table->date('id_start_date');
            $table->date('id_end_date');
            $table->string('country');
            $table->string('street_address');
            $table->string('home_number');
            $table->string('city');
            $table->string('postal_code');
            $table->string('university');
            $table->string('university_program');
            $table->string('university_year');
            $table->string('university_course');
            $table->date('university_start_date');
            $table->date('university_end_date');
            $table->string('languages');
            $table->string('health')->nullable();
            $table->string('terms')->nullable();

            $table->bigInteger('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

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
        Schema::dropIfExists('applications');
    }
}
