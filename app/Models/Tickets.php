<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
  use HasFactory;


  public $protected = [];


  public function departments()
  {
    return $this->BelongsTo(EnumDepartments::class, 'id');
  }

}
