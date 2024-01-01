<?php

namespace App\Http\Controllers\User;

use App\Models\Product;
use App\Helpers\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        $cart = new Cart();
        return response()->json($cart);
    }

    public function addCart(Request $request)
    {
        $product = Product::find($request->id);
        if ($product) {
            $quantity = $request->quantity;
            $cart = new Cart();
            $cart->add($product, $quantity);

            return response()->json([
                $product
            ]);

        } else {
            return response()->json([
                'redirect' => '/cart',
                'message' => 'Thêm không thành công',
            ]);
        }
    }
    
    // public function deleteCart($id, Cart $cart)
    // {
    //     $cart->delete($id);
    //     return response()->json([
    //         'redirect' => '/cart',
    //         'message' => 'Đã xóa sản phẩm khỏi giỏ hàng',
    //     ]);
    // }
    // public function clearCart(Cart $cart)
    // {
    //     $cart->clear();
    //     return response()->json([
    //         'redirect' => '/cart',
    //         'message' => 'Đã xóa toàn bộ giỏ hàng giỏ hàng',
    //     ]);
    // }
}
