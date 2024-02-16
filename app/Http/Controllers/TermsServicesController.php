<?php

namespace App\Http\Controllers;

use App\Models\Services;
use App\Models\termsServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TermsServicesController extends Controller
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
  public function create(termsServices $term, Request $request)
  {

    return Inertia::render("termServices/Create", [
      'services' => Services::toBase()->get(),
      'vezani' => $request->vezani,
    ]);

  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {

    // $request->validate([
    //   'term_id' => 'required',
    //   'service_id' => 'required',
    //   'quantity' => 'required',
    // ]);
    termsServices::create(
      [
        "term_id" => $request->term_id,
        "service_id" => $request->service_id,
        "quantity" => $request->quantity,
      ]
    );
    return to_route('terms.show', $request->term_id);
  }

  /**
   * Display the specified resource.
   */
  public function show(termsServices $termsServices)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(termsServices $termsServices)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, termsServices $termsServices)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(termsServices $termsServices)
  {
    //
  }
}
