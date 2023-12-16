<?php

namespace Database\Seeders;

use App\Models\OrdersDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrdersDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        OrdersDetail::factory()->count(4)->create();
    }
}
