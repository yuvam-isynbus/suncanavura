<?php

namespace App\Http\Controllers\Admin;

use App\Models\Note;
use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminApplicationNoteController extends Controller
{
  public function index(Application $application)
  {
    $notes = DB::table('notes')
      ->where(function ($query) use ($application) {
          $query->where('noteable_type', 'App\Models\User')
            ->where('noteable_id', $application->user_id)
            ->whereNull('deleted_at');
        })
        ->orWhere(function ($query) use ($application) {
          $query->where('noteable_type', 'App\Models\Application')
            ->where('noteable_id', $application->id)
            ->whereNull('deleted_at');
        })
        ->latest()
        ->get();
    // dd($application->load('user')->notes()->get());
    // $application->load('user');
    // $userNotes = $application->user->notes()->get();
    // $applicationNotes = $application->notes()->get();
    return inertia('Admin/Applications/Notes', [
      'application' => $application,
      /*       'notes' => $application
                  ->load('user')
                  ->notes()
                  ->latest()
                  ->get()
                  ->transform(function($note) {
                    return [
                      'id' => $note->id,
                      'body' => $note->body,
                      'created_at' => Carbon::parse($note->created_at)->diffForHumans()
                    ];
                  }) */
      'notes' => $notes->transform(function ($note) {
          return [
            'id' => $note->id,
            'body' => $note->body,
            'created_at' => Carbon::parse($note->created_at)->diffForHumans()
          ];
        })
    ]);
  }

  public function create()
  {
    return Inertia::render('Admin/Notes/Create');
  }

  public function store(Request $request, Application $application)
  {
    $data = request()->validate([
      'body' => ['required', 'string'],
    ]);
    $application->notes()->create($data);
    $type = $application->type === 'Work & travel' ? 'worktravel' : 'aupair';
    return redirect(route('admin.'. $type. '.applications.notes.index', $application->uuid))->with('success', 'Bilješka je uspješno kreirana.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Http\Response
   */
  public function show(Note $note)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Http\Response
   */
  public function edit(Note $note)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Application $application, Note $note)
  {
    $data = request()->validate([
      'body' => ['required', 'string'],
    ]);
    $note->update($data);
    $type = $application->type === 'Work & travel' ? 'worktravel' : 'aupair';
    return redirect(route('admin.'. $type. '.applications.notes.index', $application->uuid))->with('success', 'Bilješka je uspješno izmjenjena.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Http\Response
   */
  public function destroy(Application $application, Note $note)
  {
    $note->delete();
    $type = $application->type === 'Work & travel' ? 'worktravel' : 'aupair';
    return redirect(route('admin.'. $type. '.applications.notes.index', $application->uuid))->with('success', 'Bilješka je uspješno izbrisana.');
  }
}
