<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDodatneInformacijeToWorktravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('worktravels', function (Blueprint $table) {
          $table->text('dodatne_informacije')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('worktravels', function (Blueprint $table) {
          $table->$table->dropColumn('dodatne_informacije');
        });
    }
}
