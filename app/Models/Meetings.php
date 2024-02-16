<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meetings extends Model
{
    use HasFactory;

    public $fillable = [
      'created_by',
      'edited_by',
      'date',
      'room',
      'name_long',
      'notes',
      'time_start',
      'time_end',
    ];
}
