<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
// use Auth;


class UserController extends Controller
{
    public function index($user_id, Request $request) {
        // dd($id);

        $user = User::where('id', $user_id)->get();
        return $user[0];
    }
}
