<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function login()
    {
        $title = 'Trang đăng nhập Admin';
        return view('admin.login.index', compact('title'));
    }
    public function postLogin(Request $req)
    {
        // dd($req->all());

        $rules = [

            'email' => 'required',
            'password' => 'required',
        ];
        $message = [
            'email.required' => 'Vui lòng nhập email ',
            'password.required' => 'Hãy nhập mật khẩu',
        ];
        $req->validate($rules, $message);
        // dd($req);
        if (Auth::attempt(['email' => $req->email, 'password' => $req->password, 'role' => 1])) {
            return redirect()->route('admin.index');
        } else {
            return view('admin.login.index')->with('error', 'Email hoặc mật sai');
        }
    }
    public function logoutAdmin()
    {
        Auth::logout();
        return redirect()->route('login.index');
    }
}
