<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Food;
use DB;


class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('food')->truncate();

        $food = new food;
        $food->user_id = 1;
        $food->address = "Prague, Střížkov";
        $food->name = "Hostinec u tří bratrů";
        $food->description = "We can serve you a hot soup every workday at 14:00-15:00";
        $food->status = "open";
        $food->day = new \DateTime;

        $food->save();

        $food = new food;
        $food->user_id = 1;
        $food->address = "Prague, Holešovice";
        $food->name = "Pekárna Růžena";
        $food->description = "We can offer bread every sunday after hours at 21:00";
        $food->status = "open";
        $food->day = new \DateTime;

        $food->save();

        $food = new food;
        $food->user_id = 2;
        $food->address = "Prague, Černý most";
        $food->name = "Pho king";
        $food->description = "Come get free noodle soup every saturday at 15:00-16:00";
        $food->status = "open";
        $food->day = new \DateTime;

        $food->save();

        $food = new food;
        $food->user_id = 1;
        $food->address = "Prague, Nové butovice";
        $food->name = "Tortilla makers";
        $food->description = "Free pack of tortillas just before expiration date offered on friday at 10:00";
        $food->status = "open";
        $food->day = new \DateTime;

        $food->save();

        $food = new food;
        $food->user_id = 2;
        $food->address = "Prague, Zličín";
        $food->name = "Církev sv. Řehoře";
        $food->description = "We can offer slice of bread with lard and salt to the needy, offer open every Sunday after mass at 14:00";
        $food->status = "open";
        $food->day = new \DateTime;

        $food->save();
    }
}
