<?php

namespace Database\Factories;

use App\Models\Orders;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrdersDetail>
 */
class OrdersDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'order_id' => Orders::factory()->create()->id,
            'product_id'=> Product::factory()->create()->id,
            'quantity' => fake()->numberBetween(10,100),
            'price' => fake()->numberBetween(10,100),
            
        ];
    }
}
