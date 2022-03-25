<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
// use Auth;


class UserController extends Controller
{
    public function show(Request $request, $id) {
        dd($id);

        $user = User::findOrFail($id);
        return $user->toJson();
    }
}
