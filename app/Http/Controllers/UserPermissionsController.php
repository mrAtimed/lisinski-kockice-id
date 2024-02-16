<?php

namespace App\Http\Controllers;

use App\Models\UserPermissions;
use Illuminate\Http\Request;

class UserPermissionsController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('Users/BrowseUsers', ['users' => User::all()]);

  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
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
  public function show(UserPermissions $userPermissions)
  {

    return Inertia::render('Users/BrowseUsers', ['users' => User::all()]);

  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(UserPermissions $userPermissions)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, UserPermissions $userPermissions)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(UserPermissions $userPermissions)
  {
    //
  }
}
