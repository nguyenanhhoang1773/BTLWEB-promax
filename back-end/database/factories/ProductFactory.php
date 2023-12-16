<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'price'=> fake()->numberBetween(10,100),
            'sale_price' => fake()->numberBetween(10,100),
            'category_id' => Category::factory()->create()->id,
            'slug' => fake()->slug()
        ];
    }
}
