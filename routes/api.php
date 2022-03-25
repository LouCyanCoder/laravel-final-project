<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/accommodation', function (Request $request) {
    return $request->accommodations();
});

// Route::get('/accommodation','Api\AccommodationController@index');

Route::get('/accommodation/{id}', 'Api\AccommodationController@show');

Route::get('/users/{id}','Api\UserController@show');


