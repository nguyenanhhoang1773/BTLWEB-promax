<?php

use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\CategoryController;


use App\Http\Controllers\Admin\LoginController;

use App\Http\Controllers\Admin\DashBoardController;
use App\Http\Controllers\Admin\AccountUser;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\StatisticalController;

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


// Route::get('/create',[ProductController::class, 'insertData']);
// Route::get('/create-user',[UserController::class, 'insertDataUser']);
// Route::get('/create-piano-category',[PianoCategoryController::class, 'insertPianoCategory']);
// Route::get('/create-guitar-category',[GuitarCategoryController::class, 'insertGuitarCategory']);
// Route::get('/create-violin-category',[ViolinCategoryController::class, 'insertViolinCategory']);
// Route::get('/create-saxophone-category',[SaxophoneCategoryController::class, 'insertSaxophoneCategory']);

// Route::get('/insert',[CategoryController::class,'index']);
// Route::get('/insertbyid/{id}',[CategoryController::class,'showListByID']);
// Route::get('/add',[CategoryController::class,'store']);
// Route::get('/insert-product',[AdminProductController::class,'index']);

Route::get('/logoutAdmin', [LoginController::class, 'logoutAdmin'])->name('logoutAcc');
Route::get('/', [LoginController::class, 'login'])->name('login.index');
Route::post('/', [LoginController::class, 'postLogin']);
Route::prefix('admin')->middleware('admin')->group(function () {
    Route::get('/', [DashBoardController::class, 'index'])->name('admin.index');
    Route::get('/statistical', [StatisticalController::class, 'index'])->name('statistical.index');
    Route::get('/chart', [ChartController::class, 'getDataOrdersForChart'])->name('statistical.chart');
    Route::resource('category', CategoryController::class);
    Route::resource('product', AdminProductController::class);
    Route::resource('accountuser', AccountUser::class);
    Route::get('/cartdetail', [DashBoardController::class, 'cartDetail'])->name('cartdetail');
});
