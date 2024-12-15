<?php

namespace Database\Seeders;

use App\Models\Section;
use App\Models\SubSection;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sections_data = [
            'Summary' => [
                [
                    'title' => "Overview",
                    'location' => null,
                    'from' => null,
                    'to' => null,
                    'description' => null,
                ]
            ],
            'Education' => [
                [
                    'title' => "Bachelor's of Computer Science",
                    'location' => "The University of Jordan, Amman",
                    'from' => Carbon::create(2019, 9, 27),
                    'to' => Carbon::create(2024, 2),
                    'description' => "I studied computer science at the King Abdullah II School of Information Technology. My GPA is 2.73 out of 4 (Good).",
                ],
            ],
            'Professional Experience' => [
                [
                    'title' => "Full-Stack Web Development Internship",
                    'location' => "Orange Coding Academy, Amman",
                    'from' => Carbon::create(2024, 9, 1),
                    'to' => Carbon::create(2024, 12, 31),
                    'description' => null,
                ],
            ],
        ];




        foreach ($sections_data as $key => $section_value) {
            $section = Section::create(['title' => $key, 'resume_id' => 1]);

            foreach ($section_value as $key => $value) {
                SubSection::create([
                    'title' => $value['title'],
                    'location' => $value['location'],
                    'from' => $value['from'],
                    'to' => $value['to'],
                    'description' => $value['description'],
    
                    'section_id' => $section->id
                ]);
            }
        }


    }
}
