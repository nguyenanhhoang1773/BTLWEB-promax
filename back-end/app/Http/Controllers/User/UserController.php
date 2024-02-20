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

        $messages = [

            'email.required' => 'Vui lòng nhập email ',
            'password.required' => 'Hãy nhập mật khẩu',
        ];

        $validator = Validator::make($req->all(), $rules, $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();
            return response()->json([
                'success' => false,
                'errors' => $errors
            ]);
        } else {
            if (Auth::attempt(['email' => $req->email, 'password' => $req->password, 'role' => 0])) {
                return response()->json([
                    'user' => User::where('email',$req->email)->get(),
                    'redirect' => '/',
                    'message' => 'Đăng nhập thành công',
                ]);
            } else {

                return response()->json([
                    'redirect' => '/login',
                    'message' => 'Email hoặc mật khẩu sai',
                ]);
            }
        }
    }


    public function register(Request $req)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed|min:6',
        ];

        $messages = [
            'name.required' => 'Vui lòng nhập tên của bạn',

            'email.required' => 'Vui lòng nhập email ',
            'email.unique' => 'Email này đã tồn tại ',

            'password.required' => 'Hãy nhập mật khẩu',
            'password.confirmed' => 'Mật khẩu xác thực không đúng ',
            'password.min' => 'Mật khẩu ít nhất :min ký tự'
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
                return response()->json([
                    'redirect' => '/register',
                    'message' => 'Đăng kí tài khoản không thành công'
                ]);
            }
        }
    }

}
