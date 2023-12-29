<?php

use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\User\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


    Route::get('/create',[ProductController::class, 'insertData']);
    Route::get('/create-user',[UserController::class, 'insertDataUser']);

    // Route::get('/insert',[CategoryController::class,'index']);
    // Route::get('/insertbyid/{id}',[CategoryController::class,'showListByID']);
    // Route::get('/add',[CategoryController::class,'store']);
    // Route::get('/insert-product',[AdminProductController::class,'index']);
