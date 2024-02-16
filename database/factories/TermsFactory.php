<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use App\Models\enumDepartments;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Terms>
 */
class TermsFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $all = enumDepartments::all()->flatten();


    return [
      'created_by' => 1,
      'dvorana' => fake()->boolean(),
      'name_long' => fake()->safeColorName() . "-" . fake()->safeColorName(),

      'org_id' => rand(1, 10),
      'term_id' => rand(1, 10),

      'date' => fake()->dateTimeBetween('-1 days', '+1 days'),
      'start' => fake()->numberBetween(18, 20) . ":00",
      'end' => fake()->numberBetween(20, 24) . ":00",

      // 'types' => Arr::random(['Ostalo', 'Priredba', 'Rezervacija', 'Postava']),
      'type_id' => fake()->randomElement($all),

      'izvodaci' => fake()->paragraph(),
      'program' => fake()->paragraph(),
      'radio' => fake()->paragraph(),
      'domjenak' => fake()->paragraph(),
      'extra' => fake()->paragraph(20),

      'stage_apart' => fake()->numberBetween(0, 2),
      'stage_solo' => fake()->numberBetween(0, 6),
      'stage_group' => fake()->numberBetween(0, 6),

      "entry_start" => fake()->numberBetween(7, 12) . ":00",
      "entry_end" => fake()->numberBetween(12, 24) . ":00",
      "contact_person" => fake()->name(),
      "contact_num" => "09" . fake()->numberBetween(7, 9) . "/" . fake()->numberBetween(100000, 9999999),
    ];
  }
}
