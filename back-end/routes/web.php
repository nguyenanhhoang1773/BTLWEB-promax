<?php

use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\MainController;
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
    Route::prefix('/admin')->group(function () {
        // Trang chủ
        Route::get('/main',[MainController::class,'index']);
        // Category '
        Route::get('/category-create',[CategoryController::class,'create'])->name('category.create');
        Route::post('/category-create',[CategoryController::class,'store']);
        Route::get('/category-list',[CategoryController::class ,'showList'])->name('category.show');
        Route::get('/category-update/{id}',[CategoryController::class ,'getUpdate'])->name('category.update');
        Route::post('/category-update/{id}',[CategoryController::class ,'update']);
        Route::get('category-delete/{id}',[CategoryController::class ,'delete'])->name('category.delete');

        //Product 
        Route::get('product-create',[AdminProductController::class,'create'])->name('product.create');
        Route::post('/product-create',[AdminProductController::class,'store']);
        Route::get('/product-list',[AdminProductController::class ,'showList'])->name('product.show');
        Route::get('/product-update/{id}',[AdminProductController::class ,'getUpdate'])->name('product.update');
        Route::post('/product-update/{id}',[AdminProductController::class ,'update']);
        Route::get('product-delete/{id}',[AdminProductController::class ,'delete'])->name('product.delete');
    });