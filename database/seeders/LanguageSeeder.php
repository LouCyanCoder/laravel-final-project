<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Language;
use DB;


class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->truncate();

        $languages = [
            "English",
            "Czech",
            "German",
            "Ukrainian",
            "Vietnamese",
            "Russian",
            "Arabic",
            "Italian",
            "Spanish",
            "Hindi/Urdu",
            "Mandarin Chinese",
            "Bengali",
            "Portuguese",
            "Japanese",
            "Javanese",
            "Punjabi",
            "Wu",
            "French",
            "Telugu",
            "Marathi",
            "Korean",
            "Tamil",
            "Turkish",
            "Cantonese/Yue"
        ];

            foreach ($languages as $name) {

                Language::create([
                    'language' => $name
                ]);

            }

        
    }
}
