<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orders;
class StatisticalController extends Controller
{
    public function index()
    {
        $orders = Orders::orderBy('created_at', 'desc')->has('orderDetails')->with('orderDetails.product')->get();
        // dd($orders);
        return view('admin.statistical.all',compact('orders'));
    }  
}
