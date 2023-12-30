<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orders;

class DashBoardController extends Controller
{
    public function __construct()
    {
        // $this->orderdetail = new OrderDetail();
    }
    public function index()
    {
        $order = Orders::orderBy('id', 'desc')->paginate(15);
        // dd($order);
        return view('admin.index', compact('order'));
    }
    public function cartDetail(Request $req)
    {
        // dd($req->id);
        $orders = Orders::has('orderDetails')->with('orderDetails.product')->where('id', $req->id)->get();
        // dd($orders);
        return view('admin.cartDetail.index', compact('orders'));
    }
}
