<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AccountUser extends Controller
{
    public function index()
    {
        $user = User::orderBy('created_at', 'desc')->Search()->where('role', 0)->paginate(15);
        return view('admin.account.accountUser', compact('user'));
    }
    public function destroy($id)
    {
        try {
            $user = User::where('id', $id)->first();
            $user->delete();
            return redirect()->route('accountuser.index')->with('msg', 'Xóa thành công ');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Xóa không thành công ');
        }
    }
}
