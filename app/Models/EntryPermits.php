<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntryPermits extends Model
{
  use HasFactory;

  public $hidden = [
    'created_at',
    'updated_at',
    "created_by",
    "edited_by"

  ];

}
