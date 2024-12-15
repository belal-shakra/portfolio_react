<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        // DB::table('projects')->insert([
        //     [
        //         'title' => 'Airbnb',
        //         'category' => 'Imitation | index page',
        //         'link' => 'https://belal-shakra.github.io/airbnb/',
        //         'image' => null,
        //         'path' => null,
        //         'project_area_id' => 1,
        //     ],
        //     [
        //         'title' => 'Zomato',
        //         'category' => 'Imitation | index page',
        //         'link' => 'https://github.com/belal-shakra/zomato',
        //         'image' => null,
        //         'path' => null,
        //         'project_area_id' => 1,
        //     ],
        //     [
        //         'title' => 'Feane',
        //         'category' => 'Imitation | index page',
        //         'link' => 'https://belal-shakra.github.io/Feane/',
        //         'image' => null,
        //         'path' => null,
        //         'project_area_id' => 1,
        //     ],
        // ]);

        DB::table('projects')->insert([
            [
                'title' => 'Airbnb',
                'category' => 'Imitation | index page',
                'link' => 'https://belal-shakra.github.io/airbnb/',
                'image' => null,
                'path' => null,
                'project_area_id' => 1,
            ],
            [
                'title' => 'Zomato',
                'category' => 'Imitation | index page',
                'link' => 'https://github.com/belal-shakra/zomato',
                'image' => null,
                'path' => null,
                'project_area_id' => 1,
            ],
            [
                'title' => 'Feane',
                'category' => 'Imitation | index page',
                'link' => 'https://belal-shakra.github.io/Feane/',
                'image' => null,
                'path' => null,
                'project_area_id' => 1,
            ],
            [
                'title' => 'Graduation Project and Internship System',
                'category' => 'Graduation Project',
                'link' => 'https://github.com/belal-shakra/Graduation-Project-and-Internship-System',
                'image' => null,
                'path' => null,
                'project_area_id' => 2,
            ],
            [
                'title' => 'ZenBlog',
                'category' => 'Blog',
                'link' => 'https://github.com/belal-shakra/ZenBlog',
                'image' => null,
                'path' => null,
                'project_area_id' => 2,
            ],
            [
                'title' => 'VocabVault',
                'category' => 'Dictionary',
                'link' => 'https://github.com/belal-shakra/VocabVault',
                'image' => null,
                'path' => null,
                'project_area_id' => 2,
            ],
            [
                'title' => 'Sensive',
                'category' => 'Blog',
                'link' => 'https://github.com/belal-shakra/Sensive',
                'image' => null,
                'path' => null,
                'project_area_id' => 2,
            ],
        ]);
    }
}
