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

Route::get('/', function () {
    return view('components.index');
});

Route::get('/auth/register', function () {
    dump('test');
    return view('register');
});

Route::get('/auth/login', function () {
    return view('login');
});

// registration forms setting
// logout button
// permissions between user and admin
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



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