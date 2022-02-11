<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Models\Language;

class AdminLanguageController extends Controller
{
  public function index()
  {
    return inertia('Admin/Applications/Languages', [
      'languages' => Language::all()
    ]);
  }

  public function create()
  {
    // return Inertia::render('Admin/Languages/Create');
  }

  public function store(Request $request)
  {
    $data = request()->validate([
      'name' => ['required', 'string'],
    ]);
    Language::create(array_merge($data));
    return redirect()->back()->with('success', 'Strani jezik je uspješno kreiran.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Language  $note
   * @return \Illuminate\Http\Response
   */
  public function show(Language $note)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Language  $note
   * @return \Illuminate\Http\Response
   */
  public function edit(Language $note)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Language  $note
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Language $language)
  {
    $data = request()->validate([
      'name' => ['required', 'string'],
    ]);
    $language->update($data);
    return redirect()->back()->with('success', 'Strani jezik je uspješno izmjenjen.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Language  $note
   * @return \Illuminate\Http\Response
   */
  public function destroy(Language $language)
  {
    $language->delete();
    return redirect()->back()->with('success', 'Sponzor je uspješno izbrisan.');
  }
}
