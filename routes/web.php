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

// Route::get('/{path?}', function () {
//     return view('components.index');
// })->where('path', '.*');

Route::get('/auth/register', function () {
    dump('test');
    return view('register');
});

Route::get('/auth/login', function () {
    return view('login');
});

Route::get('/forms/accommodationForm', function () {
    return view('accommodation');
});

Route::get('/accomodation/create', 'App\Http\Controllers\AccommodationController@create');
Route::post('/accomodation', 'App\Http\Controllers\AccommodationController@store');
Route::get('/accomodation/{id}', 'App\Http\Controllers\AccommodationController@show');
Route::delete('/accomodation/{id}', 'App\Http\Controllers\AccommodationController@delete');
Route::get('/accomodation/{id}/edit', 'App\Http\Controllers\AccommodationController@edit');
Route::put('/accomodation/{id}', 'App\Http\Controllers\AccommodationController@update');
// Route::get('/accomodation/create', 'App\Http\Controllers\AccommodationController@create');

// registration forms setting
// logout button
// permissions between user and admin
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

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
