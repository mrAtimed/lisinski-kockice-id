<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mocks>
 */
class MocksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'first_name'=> fake()->firstName(), 
           'last_name'=> fake()->lastName(),
           'gender'=> fake()->boolean(),
           'address'=> fake()->address(),
           'oib'=> fake()->numberBetween(10000000000,99999999999),
           'company'=> fake()->company(),
           'notes'=> fake()->paragraph(),
          
        ];
    }
}
