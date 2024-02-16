<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Terms extends Model
{
  use HasFactory;

  public $fillable = [
    'name_long',
    'dvorana',
    'name_long',
    'org_id',
    'term_id',
    'date',
    'start',
    'end',
    'types',
    'type_id',
    'izvodaci',
    'program',
    'radio',
    'domjenak',
    'extra',
    'contact_person',
    'contact_num',
    'entry_start',
    'entry_end',
    'stage_apart',
    'stage_solo',
    'stage_group',
    'tickets_paid',
    'tickets_subscriber',
    'tickets_invatations',
    'tickets_accreditation',
    'tickets_free',
    'audience_break',
    'audience_notes',
    'staige_on_duty',
    'staige_tickets_sold',
    'staige_notes',
    'sound_on_duty',
    'sound_notes',
    'light_on_duty',
    'light_notes',
    'created_by',
  ];

  public function get_org(): BelongsTo
  {
    return $this->BelongsTo(Organisers::class, "org_id");
  }

  public function terms(): HasMany
  {
    return $this->hasMany(Terms::class, "id");
  }


  public function Comments(): HasMany
  {
    return $this->hasMany(Comments::class, "id");
  }
}
