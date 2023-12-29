<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();
        return $category;
    }

    public function showListByID($id)
    {
        $category = Category::find($id);

        return $category;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'status' => 'required',
            'parent_id' => 'required',
        ]);
        $category = Category::create($validatedData);

        return response()->json(['category' => $category], 200);
    }

    public function update(Request $request, $id)
    {

        $rules = [
            'email' => 'unique:users',
            //validate lại cái này 
        ];
        $messages = [
            'email.unique' => 'Email này đã tồn tại ',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();
            return response()->json(['success' => false, 'errors' => $errors]);
        } else {
            $category = Category::findOrFail($id);
            $category->update($request->all());

            return response()->json(['category' => $category], 200);
        }
    }
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json([
            'redireact' => 'category',
            'message' => 'Xóa sản phẩm thành công'
        ]);
    }
}
