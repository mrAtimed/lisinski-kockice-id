<?php

namespace Database\Seeders;

use App\Models\enumDepartments;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnumDepartmentsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('enum_departments')->insert(
      [
        [
          'name_long' => "Pozornica", // SCENCI
          'name_short' => "POZORNICA",

        ],
        [
          'name_long' => "Ton i video", // 
          'name_short' => "TON I VIDEO",

        ],
        [
          'name_long' => "Rasvjeta",
          'name_short' => "RASVJETA",

        ],
        [
          'name_long' => "Marketing",
          'name_short' => "POZORNICA",

        ],
        [
          'name_long' => "Održavanje",
          'name_short' => "ODRZAVANJE",

        ],
        [
          'name_long' => "Posebne Usluge",
          'name_short' => "Special",

        ],
      ]
    );
  }
}
