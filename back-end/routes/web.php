<?php

use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\CategoryController;
<<<<<<< HEAD
use App\Http\Controllers\User\GuitarCategoryController;
use App\Http\Controllers\User\PianoCategoryController;
=======
<<<<<<< HEAD
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\MainController;
=======
use App\Http\Controllers\Admin\DashBoardController;
use App\Http\Controllers\Admin\AccountUser;
use App\Http\Controllers\Admin\StatisticalController;
>>>>>>> 30944fff1c5faff877ec22e14f247a12cb09a419
>>>>>>> a78c87c3d777329b19f1dacf46b8f8348e2c2bb8
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\User\SaxophoneCategoryController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ViolinCategoryController;

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
    Route::get('/create-piano-category',[PianoCategoryController::class, 'insertPianoCategory']);
    Route::get('/create-guitar-category',[GuitarCategoryController::class, 'insertGuitarCategory']);
    Route::get('/create-violin-category',[ViolinCategoryController::class, 'insertViolinCategory']);
    Route::get('/create-saxophone-category',[SaxophoneCategoryController::class, 'insertSaxophoneCategory']);

    // Route::get('/insert',[CategoryController::class,'index']);
    // Route::get('/insertbyid/{id}',[CategoryController::class,'showListByID']);
    // Route::get('/add',[CategoryController::class,'store']);
    // Route::get('/insert-product',[AdminProductController::class,'index']);
<<<<<<< HEAD

    
=======
    
    Route::get('login',[LoginController::class,'index']);
    Route::prefix('/admin')->group(function () {
        Route::get('/', [DashBoardController::class, 'index'])->name('admin.index');
        Route::get('/statistical', [StatisticalController::class, 'index'])->name('statistical.index');
        Route::resource('category', CategoryController::class);
        Route::resource('product', AdminProductController::class);
        Route::resource('accountuser', AccountUser::class);
        Route::get('/cartdetail', [DashBoardController::class, 'cartDetail'])->name('cartdetail');
    
    });
>>>>>>> a78c87c3d777329b19f1dacf46b8f8348e2c2bb8
