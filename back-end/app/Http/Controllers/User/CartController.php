<?php

namespace App\Http\Controllers\User;

use App\Models\Product;
use App\Models\Cart;
// use App\Helpers\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    
    public function index(Request $req)
    {
        $cart = Cart::where('customer_id', $req->id)->get();
        // $cart = Cart::get();

        return $cart;
    }

    public function addCart(Request $req)
    {
        $cart = Cart::create([
            'customer_id' => $req->customerid,
            'product_id' => $req->productid,
            'name' => $req->name,
            'sale_price' => $req->saleprice,
            'price' => $req->price
        ]);
        // $cart =Cart::create($req->all());
        return response()->json([
            'redirect' => '/cart',
            'message' => 'Thêm vào giỏ hàng thành công',
        ]);
    }

    public function deleteCart($id)
    {

    }
    public function clearCart()
    {
        
    }
}
