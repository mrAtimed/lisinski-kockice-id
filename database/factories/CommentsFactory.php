<?php

namespace Database\Factories;

use App\Models\Terms;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comments>
 */
class CommentsFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {

    $terms = Terms::latest('id')->get()->pluck('id');

    return [
      'name' => fake()->email(),
      'notes' => 'komentar=' . fake()->paragraph(),
      // 'term_id' => fake()->randomElement($terms),
      'term_id' => fake()->randomElement($terms),

      // 'department_id' => rand(1,5),
      'created_by' => rand(1, 3),
      'edited_by' => rand(1, 3),
    ];
  }
}
