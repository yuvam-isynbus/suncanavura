<?php

use App\Models\Application;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeApplicationsTableThree extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // $table->string('status')->default(Payment::PENDING);
        Schema::table('applications', function (Blueprint $table) {
          $table->date('birth_date')->nullable()->change();
          $table->bigInteger('sponsor_id')->unsigned()->default(0);
          $table->string('program')->default(Application::INDEPENDNET);
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
        $table->date('birth_date')->nullable(false)->change();
        $table->dropColumn('sponsor_id');
        $table->dropColumn('program');
      });
    }
}
