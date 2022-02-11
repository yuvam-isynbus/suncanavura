<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('worktravels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->integer('satnica')->nullable();
            $table->boolean('smjestaj')->nullable();
            $table->integer('smjestaj_price')->nullable();
            $table->timestamps();
        });
    }

    // Znači kod poslova imamo naziv, sliku, opis posla, satnicu I
    // treba rubrika dali imaju osiguran smještaj da/ne I koja je cijena smještaja


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('worktravels');
    }
}
