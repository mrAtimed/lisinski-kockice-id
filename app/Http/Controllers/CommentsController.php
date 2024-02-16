<?php

namespace App\Http\Controllers;

use App\Models\Terms;
use Inertia\Inertia;

use App\Models\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    return Inertia::render('comments/Index', [
      'comments' => Comments::where('term_id', 0)->latest('id')->toBase()->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(Request $request)
  {
    return Inertia::render('comments/Create', [
      'terms' => Terms::toBase()->get(),
      'vezani' => $request->vezani,

    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|string|min:3|max:255',
      'notes' => 'required|string|min:3|max:255',
    ]);

    Comments::create(
      $request->all()
    );

    // AKO JE OBAVJEST A NE KOMENTAR

    if ($request->term_id == null) {
      return to_route("comments.index");
    }
    return to_route('terms.show', $request->term_id);
  }

  /**
   * Display the specified resource.
   */
  public function show(Comments $comment)
  {
    return Inertia::render('comments/Show', [
      'comment' => $comment,
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Comments $comment)
  {
    return Inertia::render('comments/Edit', [
      'comment' => $comment
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Comments $comments)
  {
    $request->validate([
      'name' => 'required|string|min:3|max:255',
      'notes' => 'required|string|min:3|max:255',
    ]);

    $comments->update(
      [
        "name" => $request->name,
        "notes" => $request->notes,
        "edited_by" => $request->edited_by
      ]
    );
    return to_route('comments.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    Comments::destroy($id);
    return to_route('comments.index');
  }
}
