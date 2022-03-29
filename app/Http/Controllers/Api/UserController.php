<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;


class UserController extends Controller
{
    public function index(Request $request) {
        // dd($id);

        $user = User::get();
        return $user;
    }

    public function show(Request $request) {
        // dd($id);

        // $user = User::find($id);
        $user = Auth::user();
        // dd($user);
        return $user;
    }
}
