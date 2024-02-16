<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organisers extends Model
{
  use HasFactory;


  public function org(): HasMany
  {
    return $this->HasMany(Terms::class, "id");
  }
}
