<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meetings>
 */
class MeetingsFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'created_by' => rand(1, 3),
      'edited_by' => 0,
      'name_long' => 'test-sastanci-' . fake()->company(),
      'date' => fake()->dateTimeBetween("-1 months", "+1 months"),
      'room' => "soba-" . rand(100, 201),
      'notes' => fake()->paragraph(20, true),
      'time_start' => fake()->time('H:i'),
      'time_end' => fake()->time('H:i'),
      'duration' => rand(1, 3),
    ];
  }
}
