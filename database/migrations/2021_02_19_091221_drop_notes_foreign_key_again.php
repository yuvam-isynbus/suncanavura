<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropNotesForeignKeyAgain extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('notes', function (Blueprint $table) {
        $table->dropForeign(['application_id']);
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('notes', function (Blueprint $table) {
        $table->foreign('application_id')->references('id')->on('applications')->onDelete('cascade');
      });
    }
}
