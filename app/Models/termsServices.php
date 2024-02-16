<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TermsServices extends Model
{
  use HasFactory;

  public $hidden = [
    'created_at',
    'updated_at'
  ];
  public $fillable = [
    'term_id',
    'service_id',
    'quantity'
  ];
}
