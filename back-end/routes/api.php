<?php

use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\SearchController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\User\CheckoutController;
use App\Http\Controllers\User\HistoryController;


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


Route::post('/login', [UserController::class, 'login']);

Route::post('/logoutAcc', [UserController::class, 'logoutAcc']);

Route::post('/register', [UserController::class, 'register']);

Route::get('/list-product', [ProductController::class, 'getProduct']);

Route::post('/list-image', [ProductController::class, 'image']);

Route::get('/list-product-stock', [ProductController::class, 'getProductStock']);

Route::get('/category', [ProductController::class, 'getCategory']);

Route::post('/search', [SearchController::class, 'searchProduct']);

Route::post('/cart', [CartController::class, 'index']);

Route::post('/totol', [CartController::class, 'totol']);

Route::post('/addCart', [CartController::class, 'addCart']);

Route::post('/deletecart', [CartController::class, 'deleteCart']);

Route::get('/claercart', [CartController::class, 'clearCart']);

Route::post('/checkout', [CheckoutController::class, 'submit_Form']);

Route::post('/history', [HistoryController::class, 'history']);

