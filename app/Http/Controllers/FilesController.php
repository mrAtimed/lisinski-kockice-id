<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Files;
use App\Traits\Upload; //import the trait

class FilesController extends Controller
{
  use Upload; //add this trait

  public function store(Request $request)
  {
    if ($request->hasFile('file')) {
      $path = $this->UploadFile($request->file('file'), 'Products'); //use the method in the trait
      Files::create([
        'path' => $path
      ]);
      return redirect()->route('files.index')->with('success', 'File Uploaded Successfully');
    }
  }
}
