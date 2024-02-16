<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TermsTypes extends Model
{
  use HasFactory;

  public function getTerms(): BelongsTo
  {
    return $this->belongsTo(Terms::class, "type_id");
  }
}
