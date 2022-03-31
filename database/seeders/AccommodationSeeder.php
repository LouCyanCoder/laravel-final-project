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
        $accommodation->type = "couch";
        $accommodation->max_person = 2;
        $accommodation->pet_friendly = "yes";
        $accommodation->description = "We can offer you just a couch because we're poor, but it's something";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();

        $accommodation = new Accommodation;
        $accommodation->user_id = 1;
        $accommodation->area_address = "Prague, Bryksova";
        $accommodation->type = "garage";
        $accommodation->max_person = 10;
        $accommodation->pet_friendly = "no";
        $accommodation->description = "Bring your own mat and sleeping bag, it gets cold out there.";
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
        $accommodation->description = "We can offer you a nice double room on 3rd floor with balcony";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();

        $accommodation = new Accommodation;
        $accommodation->user_id = 2;
        $accommodation->area_address = "Prague, Nýdecká 447";
        $accommodation->type = "flat";
        $accommodation->max_person = 1;
        $accommodation->pet_friendly = "no";
        $accommodation->description = "We have a flat with a spare bedroom.";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();

        $accommodation = new Accommodation;
        $accommodation->user_id = 1;
        $accommodation->area_address = "Prague, Na šťáhlavce 2003";
        $accommodation->type = "house";
        $accommodation->max_person = 6;
        $accommodation->pet_friendly = "yes";
        $accommodation->description = "We can offer you a nice housing for a whole family. With a garden for the pets and kids to run around.";
        $accommodation->status = "open";
        $accommodation->start_date = new \DateTime;
        $accommodation->end_date = new \DateTime;

        $accommodation->save();
    }
}
