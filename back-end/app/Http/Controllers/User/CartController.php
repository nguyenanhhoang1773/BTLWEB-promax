<?php

namespace App\Http\Controllers\User;
use App\Models\Product;
use App\Helpers\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Cart $cart)
    {
        // dd($cart);
        return view('fe.cart', compact('cart'));
    }

    public function addCart(Request $request, Cart $cart)
    {

        $product = Product::find($request->id);
        $quantity = $request->quantity;
        $cart->add($product, $quantity);
        return redirect()->route('cart.index');
    }
    public function deleteCart($id, Cart $cart)
    {
        $cart->delete($id);
        return redirect()->route('cart.index')->with('msg', 'Đã xóa sản phẩm khỏi giỏ hàng ');
    }
    // public function updateCart($id, Cart $cart){


    //     $quantity = request('quantity');

    //     $cart->update($id,$quantity);
    //     return view('fe.cart', compact('cart'));
    // }
    public function clearCart(Cart $cart)
    {
        $cart->clear();
        return redirect()->route('cart.index')->with('msg', 'Đã xóa toàn bộ sản phẩm khỏi giỏ hàng');
    }
}
