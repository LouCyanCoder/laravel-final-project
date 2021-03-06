<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccommodationController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TransportController;
use App\Http\Controllers\SearchController;

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
    // return redirect('/dashboard');
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/accommodation', function (Request $request) {
    return $request->accommodations();
});

// Route::get('/accommodation','Api\AccommodationController@index');

Route::get('/accommodation/{id}', 'Api\AccommodationController@show');
Route::get('/accomodation','Api\AccommodationController@index');

Route::get('/food','Api\FoodController@index');

Route::get('/transport','Api\TransportController@index');

Route::get('/service','Api\ServiceController@index');

//Route::get('/users/{id}','Api\UserController@show');
Route::get('/users/{user_id}','Api\UserController@index');

Route::get('/search','Api\SearchController@index');


