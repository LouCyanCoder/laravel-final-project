<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('services')->truncate();

                $services = [
                [
                'name' => 'law_service',
                'description' => "Advice and consultation with legal issues."
                ],

                [
                'name' => 'translator',
                'description' => "Translation services for dealing with administrative tasks."
                ],

                [
                'name' => 'psychology_psychotherapy',
                'description' => "Help and advice for coping with stress and maintaining your mental health."
                ],

                [
                'name' => 'administration',
                'description' => "Advice and services for dealing with local/municipal authorities."
                ],

                [
                'name' => 'education_mentoring',
                'description' => "Education and mentoring in various areas of expertise."
                ],
        ];



        foreach ($services as $service) {

            // if ($mission['name'] == 'No Time to Die') {
            //     $outcome = 'failure';
            // } else {
            //     $outcome = 'success';
            // }

            Service::create([
                'name' => $service['name'],
                'description' => $service['description'],
                
            
            ]);
        }
    }
}
    

