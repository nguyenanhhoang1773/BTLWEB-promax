<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function login(Request $req)
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



        if (Auth::attempt(['email' => $req->email, 'password' => $req->password, 'role' => 0])) {

            return response()->json([
                'redirect' => '/user',
                'message' => 'Đăng nhập thành công',
            ]);
        } else if (Auth::attempt(['email' => $req->email, 'password' => $req->password, 'role' => 1])) {

            return response()->json([
                'redirect' => '/admin',
                'message' => 'Chào mừng quay trở lại',
            ]);
        } else {
            return redirect()->back()->with('error', 'Email hoặc mật sai');
        }
    }

    public function register(Request $req)
    {
        $rules = [
            'email' => 'unique:users',
        ];
        $messages = [
            'email.unique' => 'Email này đã tồn tại ',
        ];

        $validator = Validator::make($req->all(), $rules, $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();
            return response()->json(['success' => false, 'errors' => $errors]);
        } else {
            // Tiếp tục xử lý nếu validate thành công
            $ok =  Hash::make($req->password);
            $req->merge(['password' => $ok]);
         
            try {
                User::create($req->all());
                return response()->json([
                    'redirect' => '/login',
                    'message' => 'Đăng kí tài khoản thành công'
                ]);
            } catch (\Throwable $th) {
                //throw $th;
            }
            // return redirect()->route('login')->with('msg', 'Đăng kí tài khoản thành công');
            
        }
    }


    public function insertDataUser()
    {
        $user1 = User::create([
            'name' => 'Bryan Jeremy Joseph',
            'email' => 'Admin@gmail.com',
            'password' => '123123',
        ]);
        return 'add successfully';
    }
}
