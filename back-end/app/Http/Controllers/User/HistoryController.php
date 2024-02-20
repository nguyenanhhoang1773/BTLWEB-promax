<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orders;

class HistoryController extends Controller
{
    public function history(Request $request)
    {
        $orders = Orders::has('orderDetails')->with('orderDetails.product')->where('customer_id', $request->id)->get();
        return $orders;
    }
}
