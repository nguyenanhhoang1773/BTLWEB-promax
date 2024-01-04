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

        // return $cart;
        foreach ($cart as $product) {

            $totalMoney += ($product->sale_price > 0 ? $product->sale_price : $product->price  * $product->quantity);
        }


        $order = Orders::create([
            'customer_id' => $req->id,
            'total_amount' => $totalMoney,
            'phone' => $req->phone,
            'address' => $req->address,
            'note' => $req->note 
        ]);


        if ($order) {
            $order_id = $order->id;
            foreach ($cart as $product) {
                OrdersDetail::create([
                    'order_id' => $order_id,
                    'product_id' => $product->product_id,
                    'quantity' => 1,
                    'price' => $product->sale_price > 0 ? $product->sale_price : $product->price
                ]);
            }
        }
        foreach ($cart as $item) {
            $item->delete();
        }

        return response()->json([
            'redirect' => '/',
            'message' => 'Đặt hàng thành công',
        ]);
    }
}
