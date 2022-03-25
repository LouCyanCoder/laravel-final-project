<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AccommodationController extends Controller
{
    public function show(Request $request, $id)
    {
        dd('asda');

        $accommodation = Accommodation::findOrFail($id);
        return $accommodation->toJson();    
    }
}
