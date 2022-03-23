<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Accommodation;
use DB;

class AccommodationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accommodations')->truncate();

        $accommodation = new Accommodation;
        $accommodation->user_id = 1;
        $accommodation->area_adress = "Prague";
        $accommodation->type = "flat";
        $accommodation->max_person = 2;
        $accommodation->pet_friendly = "yes";
        $accommodation->description = "Poor, but it's something";
        $accommodation->contact_person = "Yes";
        $accommodation->contact_info = "Dunno";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();
    }
}
