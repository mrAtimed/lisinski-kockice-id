<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnumCycleSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('enum_cycles')->insert(
      [
        [
          'name_long' => "Ostalo",
          'name_short' => "OSTALO",

        ],
        [
          'name_long' => "Lisinski Subotom",
          'name_short' => "SUBOTOM",

        ],
        [
          'name_long' => "Videoklub Lininski",
          'name_short' => "VIDEOKLUB",

        ],
        [
          'name_long' => "Plava Oktava",
          'name_short' => "PLAVA",

        ],
        [
          'name_long' => "Crvena Oktava",
          'name_short' => "CRVENA",

        ],
      ]
    );
  }
}
