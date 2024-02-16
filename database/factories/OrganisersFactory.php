<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organisers>
 */
class OrganisersFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'name_long' => 'test-organizator-' . fake()->company(),
      'name_short' => fake()->companySuffix(),
      'address_text' => fake()->address(),
      'oib' => fake()->numberBetween(10000000000, 99999999999),
    ];
  }
}
