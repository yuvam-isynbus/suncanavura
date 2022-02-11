<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Models\Destination;

class AdminDestinationController extends Controller
{
  public function index()
  {
    return inertia('Admin/Applications/Destinations', [
      'destinations' => Destination::all()
    ]);
  }

  public function create()
  {
    // return Inertia::render('Admin/Destinations/Create');
  }

  public function store(Request $request)
  {
    $data = request()->validate([
      'name' => ['required', 'string'],
    ]);
    Destination::create(array_merge($data));
    return redirect()->back()->with('success', 'Destinacija je uspješno kreirana.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Destination  $note
   * @return \Illuminate\Http\Response
   */
  public function show(Destination $note)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Destination  $note
   * @return \Illuminate\Http\Response
   */
  public function edit(Destination $note)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Destination  $note
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Destination $destination)
  {
    $data = request()->validate([
      'name' => ['required', 'string'],
    ]);
    $destination->update($data);
    return redirect()->back()->with('success', 'Destinacija je uspješno izmjenjena.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Destination  $note
   * @return \Illuminate\Http\Response
   */
  public function destroy(Destination $destination)
  {
    $destination->delete();
    return redirect()->back()->with('success', 'Destinacija je uspješno izbrisana.');
  }
}
