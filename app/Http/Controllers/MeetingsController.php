<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Meetings;
use Illuminate\Http\Request;

use App\Models\enumDepartments;

class MeetingsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  { {
      return Inertia::render('meetings/Index', [
        'meetings' => Meetings::when($request->q, function ($querry, $search) {
          $querry
            ->where('notes', 'LIKE', '%' . $search . '%')
            ->orWhere('id', 'LIKE', '%' . $search . '%');
        })->latest('id')->paginate(100),
      ]);
    }
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('meetings/Create');
  }

  public function store(Request $request)
  {
    $request->validate([
      'name_long' => 'required',
      'date' => 'required',
      'room' => 'required',
      // 'department_id' => 'required',
      // 'notes' => 'required|string|min:3|max:255',
    ]);

    Meetings::create(
      $request->all()
    );
    return to_route('meetings.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Meetings $meeting)
  {
    return Inertia::render('meetings/Show', [
      'meeting' => $meeting
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Meetings $meetings)
  {
    //
  }

  public function update(Request $request, Meetings $meetings)
  {
    //
  }

  public function destroy(Meetings $meetings)
  {
    //
  }


}
