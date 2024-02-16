<?php

namespace App\Http\Controllers;

use App\Models\Terms;
use Inertia\Inertia;

use App\Models\Organisers;
use Illuminate\Http\Request;

class OrganisersController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    return Inertia::render('organisers/Index', [
      'organizers' => Organisers::when($request->q, function ($querry, $search) {
        $querry
          ->where('name_long', 'LIKE', '%' . $search . '%')
          ->orWhere('oib', 'LIKE', '%' . $search . '%');
      })->latest('id')->paginate(100),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('organisers/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'name_long' => 'required|string|min:3|max:255',
      // 'name_short' => 'required|string|min:3|max:255',
      // 'department_id' => 'required',
      // 'notes' => 'required|string|min:3|max:255',
    ]);

    Organisers::create(
      $request->all()
    );
    return to_route('organisers.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Organisers $organiser)
  {
    return Inertia::render('organisers/Show', [
      'term' => Terms::Latest('id')->where('org_id', $organiser->id)->paginate(),
      'org' => $organiser,

    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Organisers $organiser)
  {
    return Inertia::render('organisers/Edit', [
      'organiser' => $organiser,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Organisers $organisers)
  {
    $request->validate([
      'name_long' => 'required|string|min:3|max:255',
    ]);

    $organisers->update(
      [
        $request->all(),
      ]
    );
    return to_route('organisers.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    Organisers::destroy($id);
    return to_route('organisers.index');
  }
}
