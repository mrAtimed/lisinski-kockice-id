<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\enumDepartments;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Services>
 */
class ServicesFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {

    return [
      'name_long' => fake()->colorName(),
      'name_short' => fake()->userName(),
      'department_id' => rand(1, 3),
      'notes' => fake()->paragraph(5),
    ];
  }
}
