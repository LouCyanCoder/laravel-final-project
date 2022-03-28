<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Transport;
use DB;


class TransportationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transports')->truncate();

                $transports = [
                [
                'user_id' => 1,
                'location_from' => 'Kyiv',
                'destination' => 'Brno',
                'max_person' => 3,
                'status' => "on_demand"
                ],

                [
                'user_id' => 2,
                'location_from' => 'Mali Selmentsi',
                'destination' => 'Bratislava',
                'max_person' => 6,
                'status' => "closed"
                ],

                [
                'user_id' => 2,
                'location_from' => 'Uzhhorod',
                'destination' => 'Praha',
                'max_person' => 6,
                'status' => "on_demand"
                ],

                [
                'user_id' => 1,    
                'location_from' => 'Malyi Bereznyi',
                'destination' => 'České Budějovice',
                'max_person' => 2,
                'status' => "open"
                ],

                [
                'user_id' => 1,
                'location_from' => 'Chop',
                'destination' => 'Wien',
                'max_person' => 4,
                'status' => "open"
                ],
        ];



        foreach ($transports as $transport) {

            // if ($mission['name'] == 'No Time to Die') {
            //     $outcome = 'failure';
            // } else {
            //     $outcome = 'success';
            // }

            Transport::create([
                'user_id' =>$transport['user_id'],
                'location_from' => $transport['location_from'],
                'destination' => $transport['destination'],
                'max_person' => $transport['max_person'],
                'status' => $transport['status']
                
            
            ]);
        }
    }
}
