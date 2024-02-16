<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TermsTypesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {

    DB::table('terms_types')->insert([
      [
        'name_long' => "Ostalo"
      ],
      [
        'name_long' => "Priredba"
      ],
      [
        'name_long' => "Rezervacija"
      ],
      [
        'name_long' => "Montaža ?"
      ],
      [
        'name_long' => "Demontaža ?"
      ],
      [
        'name_long' => "Pokus"
      ],
      [
        'name_long' => "Snimanje"
      ],
      [
        'name_long' => "Izložba"
      ],
      [
        'name_long' => "Press konf."
      ],
      [
        'name_long' => "Cocktail"
      ],
    ]);


  }
}
