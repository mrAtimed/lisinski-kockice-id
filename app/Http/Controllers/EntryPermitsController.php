<?php

namespace App\Http\Controllers;

use App\Models\EntryPermits;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EntryPermitsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return abort(403);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(Request $request)
  {
    return Inertia::render(
      'entry/Create',
      [
        'term' => $request->term,
      ]
    );
  }

  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(EntryPermits $entryPermits)
  {

  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(EntryPermits $entryPermits)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, EntryPermits $entryPermits)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(EntryPermits $entryPermits)
  {
    //
  }
}
