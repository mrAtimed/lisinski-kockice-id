<?php

namespace App\Http\Controllers;

use App\Models\Services;
use App\Models\termsServices;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


use App\Models\Terms;
use App\Models\TermsTypes;
use App\Models\Comments;
use App\Models\Organisers;
use App\Models\EntryPermits;


use Illuminate\Support\Facades\Storage;

class TermsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    return Inertia::render('terms/Index', [
      'terms' => Terms::when
      ($request->q, function ($querry, $search) {
        $querry
          ->where('name_long', 'LIKE', '%' . $search . '%')
          ->orWhere('date', 'LIKE', '%' . $search . '%');
      })->latest('id')->with('get_org')->paginate(),

      'types' => TermsTypes::toBase()->get(),
      'organizers' => Organisers::toBase()->get(),
      'test' => Terms::latest()->with('get_org')->get(),

    ]);
  }

  public function create()
  {
    // return abort(403, "seomtihng random");
    return Inertia::render('terms/Create', [
      'terms' => Terms::Latest()->toBase()->get(),
      'types' => TermsTypes::toBase()->get(),
      'organizers' => Organisers::toBase()->get(),
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'name_long' => 'required|string|min:3|max:255',
      'date' => 'required',
      'types'  => 'required',
      'org_id' => 'required',
    ]);

    Terms::create(
      $request->all()
    );
    return to_route('terms.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Terms $term, Request $request)
  {
    $id = $request->term;
    return Inertia::render('terms/Show', [
      'term' => $term,
      'comments' => Comments::Latest('id')->where('term_id', "=", $term->id)->toBase()->paginate(),
      'org' => Organisers::findOrFail($term->org_id)->toBase()->get(),
      'vezani' => Terms::findOrFail($term->term_id),
      'users' => EntryPermits::Latest('id')->where('term_id', $term->id)->toBase()->get(),
      'services' => Services::toBase()->get(),
      'termsServices' => termsServices::where('term_id', $term->id)->latest('id')->toBase()->get(),

    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Terms $term)
  {
    return Inertia::render('terms/Edit', [
      'term' => $term,
      'terms' => Terms::Latest()->toBase()->get(),
      'types' => TermsTypes::toBase()->get(),

    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Terms $terms)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    Terms::destroy($id);
    return to_route('terms.index');
  }


}
