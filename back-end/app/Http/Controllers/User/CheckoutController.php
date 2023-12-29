<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrdersDetail;
use App\Models\Orders;
use App\Helpers\Cart;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function submit_Form(Request $req, Cart $cart)
    {
        $id_user =  Auth::user()->id;
        //   dd($cart->totalprice);
        $orderDate =  Carbon::now('Asia/Ho_Chi_Minh')->format('Y-m-d');
        $order = Orders::create([
            'customer_id' => $id_user,
            'total_amount' => $cart->totalprice,
            'phone' => $req->phone,
            'address' => $req->address,
            'note' => $req->note,
            'order_date' => $orderDate
        ]);
        
        if ($order) {
            
            $order_id = $order->id;
            foreach ($cart->items as $key => $value) {
                dd($key);
                $quantity = $value['quantity'];
                OrdersDetail::create([
                    'order_id' => $order_id,
                    'product_id' => $key,
                    'quantity' => $quantity,
                    'price' => $value['price']
                ]);
            }
            session(['cart' =>  null]);
            return response()->json([
                'redirect' => '/giohang',
                'message' => 'Đặt hàng thành công',
            ]);
        } else {
            return response()->json([
                'redirect' => '/giohang',
                'message' => 'Đặt hàng không thành công',
            ]);
        }
    }
}
