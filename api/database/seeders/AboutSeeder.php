<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        About::create([
            'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam maxime tempora quaerat sunt omnis corporis quia, mollitia doloremque esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam maxime tempora quaerat sunt omnis corporis quia, mollitia doloremque esse?",
            'position' => "Full Stack Developer",
            'birthday' => Carbon::create(2000, 7, 20),
            'website' => "https://belal-shakra.github.io/portfolio/",
            'phone' => "+962 79 076 1493",
            'age' => 24,
            'degree' => "Bachelor",
            'email' => "belal.a.shakra@gmail.com",
            'image' => "",
            'path' => "",
        ]);
    }
}
