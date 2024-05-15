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
        $cart = Cart::where('customer_id', 60)->get();
        return $cart;
    }

    public function totol()
    {
        $totol = 0;
        $cart = Cart::get();
        foreach ($cart as $price) {
            $totol += $price->quantity * ($price->sale_price != 0 ?  $price->sale_price : $price->price) ;
        }
        return $totol;
    }
    public function addCart(Request $req)
    {
        // return $req->all();

        $cart = Cart::create([
            'customer_id' => $req->customerid,
            'product_id' => $req->productid,
            'quantity' => $req->quantity,
            'name' => $req->name,
            'price' => $req->price,
            'sale_price' => $req->saleprice,
            'image' => $req->image
        ]);
        return response()->json([
            'redirect' => '/cart',
            'message' => 'Thêm vào giỏ hàng thành công',
        ]);
    }

    public function deleteCart(Request $req)
    {
        $cart = Cart::where('customer_id', $req->customerid)->where('product_id', $req->productid)->get();

        foreach ($cart as $del) {
            $del->delete();
        }

        $carts = Cart::get();
        return $carts;
    }
    public function clearCart(Request $req)
    {
        $cart = Cart::where('customer_id', $req->customerid)->get();

        foreach ($cart as $del) {
            $del->delete();
        }

        $carts = Cart::get();
        return response()->json([]);
    }
}
