<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orders>
 */
class OrdersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'total_amount' => fake()->numberBetween(10,0),
            'customer_id' => User::factory()->create()->id,
            'phone' => fake()->numberBetween(10,0),
            'address' => fake()->address(),
        ];
    }
}
