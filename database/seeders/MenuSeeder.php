<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table("menus")->insert([
                'nama_menu' => fake()->name(),
                'foto_menu' => fake()->fileExtension(),
                'harga' => fake()->randomNumber(5, true),
            ]);
        }
    }
}
