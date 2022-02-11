<?php

use App\Models\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MorphNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
{
    Schema::table('notes', function (Blueprint $table): void {
        $table->nullableMorphs('noteable');
    });

    DB::table('notes')->eachById(function (object $note): void {
        DB::table('notes')
            ->where('id', '=', $note->id)
            ->update([
                'noteable_id' => $note->application_id,
                'noteable_type' => 'App\Models\Application'
            ]);
    });

    Schema::table('notes', function (Blueprint $table): void {
        $table->dropColumn('application_id');

        $table->unsignedBigInteger('noteable_id')->nullable(false)->change();
        $table->string('noteable_type')->nullable(false)->change();
    });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('notes', function (Blueprint $table): void {
        $table->dropColumn('noteable_type');
        $table->dropColumn('noteable_id');
    });
    }
}
