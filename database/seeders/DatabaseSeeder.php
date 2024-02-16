<?php

namespace Database\Seeders;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Comments;
use App\Models\Organisers;
use App\Models\Meetings;
use App\Models\User;
use App\Models\Terms;
use App\Models\Services;
use App\Models\EntryPermits;
use App\Models\termsServices;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  public function run(): void
  {

    User::factory()->create(
      [
        'name' => 'Admin',
        'email' => 'web@artmedia.hr',
        'password' => bcrypt('pass'),
        'isAdmin' => 1,
      ]
    );

    User::factory()->create(
      [
        'name' => 'Nikola',
        'email' => 'nikola.tuskan@lisinski.hr',
        'password' => bcrypt('TestnaSifra'),
        'isAdmin' => 1,
      ]
    );


    User::factory()->create(
      [
        'name' => 'User',
        'email' => 'user@lisinski.hr',
        'password' => bcrypt('TestnaSifra'),
      ]
    );

    $this->call([
      EnumDepartmentsSeeder::class,
      TermsTypesSeeder::class,
      EnumCycleSeeder::class,
      OrganisersSeeder::class,
      ServicesSeeder::class,
    ]);
    // Services::factory(5)->create();
    Terms::factory(10)->create();
    // Meetings::factory(10)->create();
    Comments::factory(30)->create();
    // EntryPermits::factory(10)->create();
    termsServices::factory(200)->create();

    // Organisers::factory(20)->create();

  }
}
