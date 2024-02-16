<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EntryPermits>
 */
class EntryPermitsFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'created_by' => rand(1, 2),
      'term_id' => rand(1, 30),
      'name' => fake()->name(),
      'oib' => rand(10000000000, 99999999999),
      'notes' => fake()->randomElement(["kz", "zg", "os"]) ."-". rand(111, 9999) . "-" . fake()->randomLetter() . fake()->randomLetter(),
    ];
  }
}
