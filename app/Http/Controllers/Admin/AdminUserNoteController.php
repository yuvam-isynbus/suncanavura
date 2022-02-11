<?php

namespace App\Http\Controllers\Admin;

use App\Models\Note;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminUserNoteController extends Controller
{
  public function index(User $user)
  {
    $notes = DB::table('notes')
      ->where(function ($query) use ($user) {
        $query->where('noteable_type', 'App\Models\User')
          ->where('noteable_id', $user->id)
          ->whereNull('deleted_at');;
      })
      ->orWhere(function ($query) use ($user) {
        $query->where('noteable_type', 'App\Models\Application')
          ->where('noteable_id', $user->application?->id)
          ->whereNull('deleted_at');;
      })
      ->latest()
      ->get();
    return inertia('Admin/Users/Notes', [
      'user' => $user,
      'notes' => $notes->transform(function ($note) {
        return [
          'id' => $note->id,
          'body' => $note->body,
          'created_at' => Carbon::parse($note->created_at)->diffForHumans()
        ];
      })
    ]);
    /*     return inertia('Admin/Users/Notes', [
      'user' => $user,
      'notes' => $user
                  ->notes()
                  ->latest()
                  ->get()
                  ->transform(function($note) {
                    return [
                      'id' => $note->id,
                      'body' => $note->body,
                      'created_at' => Carbon::parse($note->created_at)->diffForHumans()
                    ];
                  })
    ]); */
  }

  public function create()
  {
    return Inertia::render('Admin/Notes/Create');
  }

  public function store(Request $request, User $user)
  {
    $data = request()->validate([
      'body' => ['required', 'string'],
    ]);
    $user->notes()->create($data);
    return redirect(route('admin.users.notes.index', $user->id))->with('success', 'Bilješka je uspješno kreirana.');
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
  public function update(Request $request, User $user, Note $note)
  {
    $data = request()->validate([
      'body' => ['required', 'string'],
    ]);
    $note->update($data);
    return redirect(route('admin.users.notes.index', $user->id))->with('success', 'Bilješka je uspješno izmjenjena.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Http\Response
   */
  public function destroy(User $user, Note $note)
  {
    $note->delete();
    return redirect(route('admin.users.notes.index', $user->id))->with('success', 'Bilješka je uspješno izbrisana.');
  }
}
