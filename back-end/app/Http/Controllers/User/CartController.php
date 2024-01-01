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
        // return view('fe.cart', compact('cart'));
        return response()->json([
            'redirect'=>'/cart',
            'cart'=> $cart        
        ]);
    }

    public function addCart(Request $request, Cart $cart)
    {

        $product = Product::find($request->id);
        $quantity = $request->quantity;
        $cart->add($product, $quantity);
        return response()->json([
            'redirect'=>'/cart',
            'message'=>'Thêm vào giỏ hàng thành công',
        ]);
    }
    public function deleteCart($id, Cart $cart)
    {
        $cart->delete($id);
          return response()->json([
            'redirect'=>'/cart',
            'message'=>'Đã xóa sản phẩm khỏi giỏ hàng',
        ]);
    }
    public function clearCart(Cart $cart)
    {
        $cart->clear();
        return response()->json([
            'redirect'=>'/cart',
            'message'=>'Đã xóa toàn bộ giỏ hàng giỏ hàng',
        ]);
    }
}
