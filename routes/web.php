<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/auth/register', function () {
    dump('test');
    return view('register');
});

Route::get('/auth/login', function () {
    return view('login');
});
// accommodation
Route::get('/forms/accommodationForm', function () {
    return view('accommodation');
});

Route::get('/forms/foodForm', function() {
    return view('food');
});

Route::post('/accommodation/create', 'App\Http\Controllers\AccommodationController@create')->name('accommodation');
Route::get('/accommodation/create', 'App\Http\Controllers\AccommodationController@index')->name('accommodation');
Route::post('/accommodation', 'App\Http\Controllers\AccommodationController@store')->name('accommodation');
Route::get('/accommodation/{id}', 'App\Http\Controllers\AccommodationController@show');
Route::delete('/accommodation/{id}', 'App\Http\Controllers\AccommodationController@delete');
Route::get('/accommodation/{id}/edit', 'App\Http\Controllers\AccommodationController@edit');
Route::put('/accommodation/{id}', 'App\Http\Controllers\AccommodationController@update');
// Route::get('/accommodation/create', 'App\Http\Controllers\AccommodationController@create');

// transport
Route::post('/transport/create', 'App\Http\Controllers\TransportController@create')->name('transport');
Route::get('/transport/create', 'App\Http\Controllers\TransportController@index')->name('transport');
Route::post('/transport', 'App\Http\Controllers\TransportController@store')->name('transport');
Route::get('/transport/{id}', 'App\Http\Controllers\TransportController@show');
Route::delete('/transport/{id}', 'App\Http\Controllers\TransportController@delete');
Route::get('/transport/{id}/edit', 'App\Http\Controllers\TransportController@edit');
Route::put('/transport/{id}', 'App\Http\Controllers\TransportController@update');

// food
Route::post('/food/create', 'App\Http\Controllers\FoodController@create')->name('food');
Route::get('/food/create', 'App\Http\Controllers\FoodController@index')->name('food');
Route::post('/food', 'App\Http\Controllers\FoodController@store')->name('foodstore');
Route::get('/food/{id}', 'App\Http\Controllers\FoodController@show');
Route::get('/food/{id}/edit', 'App\Http\Controllers\FoodController@edit');
Route::put('/food/{id}', 'App\Http\Controllers\FoodController@update');

// service
Route::post('/service/create', 'App\Http\Controllers\ServiceController@create')->name('service');
Route::get('/service/create', 'App\Http\Controllers\ServiceController@index')->name('service');
Route::post('/service', 'App\Http\Controllers\ServiceController@store');
Route::get('/service/{id}', 'App\Http\Controllers\ServiceController@show');
Route::get('/service/{id}/edit', 'App\Http\Controllers\ServiceController@edit');
Route::put('/service/{id}', 'App\Http\Controllers\ServiceController@update');



// registration forms setting
// logout button
// permissions between user and admin
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/user','Api\UserController@show');

/* Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*'); */


Route::prefix('your_path')->group(function () {
    Route::get('/users', function () {
        // Matches The "/api/your_path/users" URL
    });
    Route::post('/users', function () {
        // Matches The "/api/your_path/users" URL
    });
    Route::put('/users', function () {
        // Matches The "/api/your_path/users" URL
    });
    Route::delete('/users', function () {
        // Matches The "/api/your_path/users" URL
    });
});

Route::post('/users', 'Controller@create');


Route::get('/your_path/users', function () {
    // Matches The "/api/your_path/users" URL
});
Route::put('/your_path/users', function () {
    // Matches The "/api/your_path/users" URL
});
Route::delete('/your_path/users', function () {
    // Matches The "/api/your_path/users" URL
});

Route::get('/{path?}', function () {
    return view('components.index');
})->where('path', '.*');