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
        $accommodation->area_address = "Prague, Olympijska 21";
        $accommodation->type = "flat";
        $accommodation->max_person = 2;
        $accommodation->pet_friendly = "yes";
        $accommodation->description = "Poor, but it's something";
        // $accommodation->contact_person = "Yes";
        // $accommodation->contact_info = "Dunno";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();

        $accommodation = new Accommodation;
        $accommodation->user_id = 1;
        $accommodation->area_address = "Prague, Olympijska 22";
        $accommodation->type = "garage";
        $accommodation->max_person = 10;
        $accommodation->pet_friendly = "no";
        $accommodation->description = "Terrible";
        // $accommodation->contact_person = "Yes";
        // $accommodation->contact_info = "Dunno";
        $accommodation->status = "closed";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();

        $accommodation = new Accommodation;
        $accommodation->user_id = 2;
        $accommodation->area_address = "Prague, Olympijska 12";
        $accommodation->type = "villa";
        $accommodation->max_person = 1;
        $accommodation->pet_friendly = "no";
        $accommodation->description = "Exclusive accomodation for pretty young woman";
        // $accommodation->contact_person = "Yes";
        // $accommodation->contact_info = "Dunno";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();

        $accommodation = new Accommodation;
        $accommodation->user_id = 2;
        $accommodation->area_address = "Prague, Olympijska 2";
        $accommodation->type = "villa";
        $accommodation->max_person = 1;
        $accommodation->pet_friendly = "no";
        $accommodation->description = "Exclusive accomodation for pretty young woman";
        // $accommodation->contact_person = "Yes";
        // $accommodation->contact_info = "Dunno";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();
    }
}
