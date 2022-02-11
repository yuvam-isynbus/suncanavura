<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Models\Sponsor;

class AdminSponsorController extends Controller
{
  public function index()
  {
    return inertia('Admin/Applications/Sponsors', [
      'sponsors' => Sponsor::all()
    ]);
  }

  public function create()
  {
    // return Inertia::render('Admin/Sponsors/Create');
  }

  public function store(Request $request)
  {
    $data = request()->validate([
      'name' => ['required', 'string'],
    ]);
    Sponsor::create(array_merge($data));
    return redirect()->back()->with('success', 'Sponzor je uspješno kreiran.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Sponsor  $note
   * @return \Illuminate\Http\Response
   */
  public function show(Sponsor $note)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Sponsor  $note
   * @return \Illuminate\Http\Response
   */
  public function edit(Sponsor $note)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Sponsor  $note
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Sponsor $sponsor)
  {
    $data = request()->validate([
      'name' => ['required', 'string'],
    ]);
    $sponsor->update($data);
    return redirect()->back()->with('success', 'Sponzor je uspješno izmjenjen.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Sponsor  $note
   * @return \Illuminate\Http\Response
   */
  public function destroy(Sponsor $sponsor)
  {
    $sponsor->delete();
    return redirect()->back()->with('success', 'Sponzor je uspješno izbrisan.');
  }
}
