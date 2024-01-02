<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrdersDetail;
use App\Models\Orders;
use App\Models\Cart;
// use App\Helpers\Cart;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function submit_Form(Request $req)
    {
        $totalMoney = 0;
        $cart = Cart::where('customer_id', $req->id)->get();
        foreach ($cart as $product) {
            $totalMoney += ($product->sale_price > 0 ? $product->sale_price : $product->price  * $product->quantity);
        }
        $order = Orders::create([
            'customer_id' => $req->id,
            'total_amount' => $totalMoney,
            'phone' => $req->phone,
            'address' => $req->address,
            'note' => $req->note,
        ]);

        if ($order) {
            $order_id = $order->id;
            foreach ($cart as $product) {
                $quantity = 1;
                OrdersDetail::create([
                    'order_id' => $order_id,
                    'product_id' => $product->product_id,
                    'quantity' => $quantity,
                    'price' => $req->sale_price > 0 ? $req->sale_price : $req->price
                ]);
            }
        }

        return response()->json([
            'redirect' => '/giohang',
            'message' => 'Đặt hàng thành công',
        ]);
    }
}
