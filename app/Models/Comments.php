<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comments extends Model
{
  use HasFactory;

  public $fillable = [
    'name',
    'notes',
    'term_id',
    'created_by',
    'edited_by',
  ];


  public function terms(): BelongsTo
  {
    return $this->BelongsTo(Terms::class, "term_id");
  }


}
