<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;

class FoodController extends Controller
{
    public function index(Request $request)
    {
        $food = Food::with('user')->get();
        return $food;
    }
}
