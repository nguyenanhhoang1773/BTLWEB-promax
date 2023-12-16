<?php

namespace Database\Seeders;

use App\Models\ImgProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImageProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        ImgProduct::factory()->count(1)->create();
    }
}
