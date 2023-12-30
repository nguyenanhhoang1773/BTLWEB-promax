<?php

use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\User\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Admin/category

//end Admin/category



Route::get('/login', [UserController::class, 'login']);

Route::post('/register', [UserController::class, 'register']);

Route::post('/logoutAcc', [UserController::class, 'logoutAcc'])->name('logoutAcc');

Route::get('/list-product',[ProductController::class,'getProduct']);

Route::get('/category',[ProductController::class,'getCategory']);


















// Route::get('/list-product', [ProductController::class, 'getProduct']);

// Route::prefix('/admin')->middleware('admin')->group(function () {
//     Route::get('/category', [CategoryController::class, 'index']);
//     Route::get('/category/{id}', [CategoryController::class, 'showListByID']);
//     Route::post('/category', [CategoryController::class, 'store']);
//     Route::put('/category/{id}', [CategoryController::class, 'update']);
//     Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

//     Route::get('/product',[AdminProductController::class ,'index']);    
//     Route::get('/product/{id}', [AdminProductController::class, 'showListByID']);
//     Route::post('/product', [AdminProductController::class, 'store']);
//     Route::put('/product/{id}', [AdminProductController::class, 'update']);
//     Route::delete('/product/{id}', [AdminProductController::class, 'destroy']);
// });
