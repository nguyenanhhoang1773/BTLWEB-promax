<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function login()
    {
        return view('fe.login');
    }
    public function postLogin(Request $req)
    {
        //validate

        $rules = [

            'email' => 'required',
            'password' => 'required',

        ];

        $message = [


            'email.required' => 'Vui lòng nhập email ',


            'password.required' => 'Hãy nhập mật khẩu',
        ];
        $req->validate($rules, $message);



        if (Auth::attempt(['email' => $req->email, 'password' => $req->password,'role'=>0])) {
            return redirect()->route('home');
        } else if(Auth::attempt(['email' => $req->email, 'password' => $req->password,'role'=>1])) {
            return redirect()->route('admin.index');
        }else{
            return redirect()->back()->with('error', 'Email hoặc mật sai');
        }
    }

    public function logoutAcc()
    {
        Auth::logout();
        session(['cart' =>  null]);
        return redirect()->route('login');
        
    }

    public function register()
    {
        return view('fe.register');
    }
    public function postRegister(Request $req)
    {
        //validate

        $rules = [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed|min:6',

        ];

        $message = [
            'name.required' => 'Vui lòng nhập tên của bạn',

            'email.required' => 'Vui lòng nhập email ',
            'email.unique' => 'Email này đã tồn tại ',

            'password.required' => 'Hãy nhập mật khẩu',
            'password.confirmed' => 'Mật khẩu xác thực không đúng ',
            'password.min' => 'Mật khẩu ít nhất :min ký tự'
        ];
        $req->validate($rules, $message);

       
        $ok =  Hash::make($req->password);
        $req->merge(['password' => $ok]);
        try {
            User::create($req->all());
        } catch (\Throwable $th) {
            //throw $th;
        }
        return redirect()->route('login')->with('msg', 'Đăng kí tài khoản thành công');
    }
    public function contact(){
        return view('fe.contact');
    }

    public function insertDataUser(){
        $user1 = User::create([
            'name' => 'Bryan Jeremy Joseph',
            'email' => 'Admin@gmail.com',
            'password' => '123123',
        ]);
        return 'add successfully';
    }
}
