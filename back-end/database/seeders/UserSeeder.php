<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use \App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $faker = Factory::create();
        // $group = new User();
        // $group->name =$faker->name;
        // $group->email =$faker->email;
        // $group->password = Hash::make($faker->password);
        // $group->save();

        User::factory()->count(5)->create();
    }
}
