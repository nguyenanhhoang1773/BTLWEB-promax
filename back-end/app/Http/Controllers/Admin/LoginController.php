<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    //
    public function index (){
        $title = 'Trang đăng nhập Admin';
        return view ('Admin.Login.index',compact('title'));
    }
}
