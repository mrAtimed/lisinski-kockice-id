<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Services;
use Illuminate\Http\Request;

use App\Models\enumDepartments;


class ServicesController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {

    return Inertia::render('services/Index', [
      'services' => Services::when($request->q, function ($querry, $search) {
        $querry
          ->where('name_long', 'LIKE', '%' . $search . '%')
          ->orWhere('notes', 'LIKE', '%' . $search . '%')
          ->orWhere('id', 'LIKE', '%' . $search . '%');
      })->latest('id')->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {

    return Inertia::render('services/Create', [
      'dep' => enumDepartments::toBase()->get(),
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'name_long' => 'required|string|min:3|max:255',
    ]);

    Services::create(
      $request->all()
    );
    return to_route('services.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Services $service)
  {
    return Inertia::render('services/Show', [
      'service' => $service,
      'departments' => enumDepartments::all(),
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Services $service)
  {
    return Inertia::render('services/Edit', [
      'service' => $service,
      'dep' => enumDepartments::toBase()->get(),

    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Services $service)
  {
    $request->validate([
      'name_long' => 'required|string|min:3|max:255',
      'name_short' => 'required|string|min:3|max:255',
      'department_id' => 'required',
      'notes' => 'required|string|min:3|max:255',
    ]);

    $service->update(
      [
        "name_long" => $request->name_long,
        "name_short" => $request->name_short,
        "department_id" => $request->department_id,
        "notes" => $request->notes,
        "edited_by" => $request->edited_by
      ]
    );
    return to_route('services.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  // public function destroy(Services $service)
  public function destroy($id)
  {
    Services::destroy($id);
    return to_route('services.index');
  }
}
