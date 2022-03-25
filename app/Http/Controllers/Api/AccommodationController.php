<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accommodation;

class AccommodationController extends Controller
{
    public function index(Request $request)
    {
        $accommodation = Accommodation::get();
        return $accommodation;
    }
}
