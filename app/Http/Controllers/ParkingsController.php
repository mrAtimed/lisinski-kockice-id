<?php

namespace App\Http\Controllers;

use App\Models\Parkings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParkingsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {

    return Inertia::render('parkings/Create', [
      'terms' => "dela",
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Parkings $parkings)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Parkings $parkings)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Parkings $parkings)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Parkings $parkings)
  {
    //
  }
}
