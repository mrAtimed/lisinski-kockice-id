<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Services extends Model
{
  use HasFactory;

  // public $fillable = [
  //   'name_long',
  //   'name_short',
  //   'department_id',
  //   'notes',
  //   'created_by',
  //   'edited_by',
  // ];
  public $protected = [];
  public function departments()
  {
    return $this->BelongsTo(EnumDepartments::class, 'id');
  }
}
