<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transport;

class TransportController extends Controller
{
    public function index(Request $request)
    {
        $transports = Transport::with('user')->get();
        return $transports;
    }
}
