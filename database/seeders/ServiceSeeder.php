<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Service;
use DB;

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
                'user_id' => 1,
                'name' => 'law_service',
                'description' => "Advice and consultation with legal issues.",
                'status' => "on_demand"
                ],

                [
                'user_id' => 2,
                'name' => 'translator',
                'description' => "Translation services for dealing with administrative tasks.",
                'status' => "closed"
                ],

                [
                'user_id' => 2,
                'name' => 'psychology_psychotherapy',
                'description' => "Help and advice for coping with stress and maintaining your mental health.",
                'status' => "on_demand"
                ],

                [
                'user_id' => 1,    
                'name' => 'administration',
                'description' => "Advice and services for dealing with local/municipal authorities.",
                'status' => "open"
                ],

                [
                'user_id' => 1,
                'name' => 'education_mentoring',
                'description' => "Education and mentoring in various areas of expertise.",
                'status' => "open"
                ],
        ];



        foreach ($services as $service) {

            // if ($mission['name'] == 'No Time to Die') {
            //     $outcome = 'failure';
            // } else {
            //     $outcome = 'success';
            // }

            Service::create([
                'user_id' =>$service['user_id'],
                'name' => $service['name'],
                'description' => $service['description'],
                'status' => $service['status']
                
            
            ]);
        }
    }
}
    

