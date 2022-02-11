<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeApplicationsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('applications', function (Blueprint $table) {
      $table->string('id_number')->nullable()->change();
      $table->date('id_start_date')->nullable()->change();
      $table->date('id_end_date')->nullable()->change();
      $table->string('street_address')->nullable()->change();
      $table->string('home_number')->nullable()->change();
      $table->string('phone')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('applications', function (Blueprint $table) {
      $table->string('id_number')->nullable(false)->change();
      $table->date('id_start_date')->nullable(false)->change();
      $table->date('id_end_date')->nullable(false)->change();
      $table->string('street_address')->nullable(false)->change();
      $table->string('home_number')->nullable(false)->change();
      $table->dropColumn('phone');
    });
  }
}
