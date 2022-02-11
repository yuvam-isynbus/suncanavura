<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeApplicationsTableTwo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('applications', function (Blueprint $table) {
        $table->date('university_start_date')->nullable()->change();
        $table->date('university_end_date')->nullable()->change();
        $table->text('languages')->nullable()->change();
        $table->string('skype')->nullable();
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
        $table->date('university_start_date')->nullable(false)->change();
        $table->date('university_end_date')->nullable(false)->change();
        $table->string('languages')->nullable(false)->change();
        $table->dropColumn('skype');
      });
    }
}
