<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accommodation;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $searchBar = Accommodation::with('user')->get();
        return $searchBar;
    }
}
