<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Terms;
use App\Models\Services;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\termsServices>
 */
class TermsServicesFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'term_id' => fake()->randomElement(Terms::toBase()->get()->pluck('id')),
      'service_id' => fake()->randomElement(Services::toBase()->get()->pluck('id')),
      'quantity' => fake()->randomDigit(),
    ];
  }
}
