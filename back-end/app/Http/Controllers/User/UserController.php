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
                    'user' => User::where('email', $req->email)->get(),
                    'state' => true,

                ]);
            } else {

                return response()->json([
                    'state' => false,
                ]);
            }
        }
    }


    public function register(Request $req)
    {
        $rules = [
            'email' => 'required|unique:users',
        ];

        $messages = [
            'email.unique' => 'Email này đã tồn tại ',
        ];

        $validator = Validator::make($req->all(), $rules, $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();
            return response()->json([
                'state' => false,
                'errors' => $errors
            ]);
        } else {
            // Tiếp tục xử lý nếu validate thành công
            $ok =  Hash::make($req->password);
            $req->merge(['password' => $ok]);

            try {
                User::create($req->all());
                return response()->json([
                    'state' => true
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'state' => true
                ]);
            }
        }
    }
}
