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
    public function confirm(Request $req)
    {

        $orders = Orders::has('orderDetails')->with('orderDetails.product')->where('id', $req->id)->get();

        
        foreach($orders as $item){
            
        }
        if($item->state == 0 ){
            $item->state = 1;
        }else {
            $item->state = 0;
        }
        // dd($item->state);
        try {
            $item->save();
            return redirect()->route('admin.index')->with('msg', 'Cập nhật trạng thái đơn hàng thành công');
        } catch (\Throwable $th) {
            return redirect()->back()->with('msg', 'Cập nhật trạng thái thành công');
        }
        return view('admin.index', compact('orders'));
    }
}
