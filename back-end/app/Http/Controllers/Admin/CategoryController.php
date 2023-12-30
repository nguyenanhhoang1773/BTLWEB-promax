<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;


class CategoryController extends Controller
{
    // public function index()
    // {
    //     $category = Category::all();
    //     return $category;
    // }

    // public function showListByID($id)
    // {
    //     $category = Category::find($id);

    //     return $category;
    // }

    // public function store(Request $request)
    // {
  
    //     $rules = [
    //         'name' => 'required'
    //     ];
    //     $messages= [
    //         'name.required' => 'Tên không được để trống'
    //     ];
    //     $validate = Validator::make($request->all(), $rules, $messages);
    //     if($validate->fails()){
    //         $errors = $validate->errors()->messages();
    //         return response()->json(['success'=> false , 'errors'=> $errors]);
    //     }
    //     else {
    //         $category = Category::create($request->all());
    //         return response()->json(['category' => $category], 200);
    //     }
    
    // }

    // public function update(Request $request, $id)
    // {

    //     $rules = [        
    //         'name' => 'required',
           
    //     ];
    //     $messages = [            
    //         'name.required' => 'Tên không được để trống',         
    //     ];

    //     $validator = Validator::make($request->all(), $rules, $messages);

    //     if ($validator->fails()) {
    //         $errors = $validator->errors()->messages();
    //         return response()->json(['success' => false, 'errors' => $errors]);
    //     } else {
    //         $category = Category::findOrFail($id);
    //         if($category){
    //             $category->update($request->all());
    //             return response()->json(['message' => 'Category updated successfully','category' => $category], 200);
    //         }
    //        else {
    //             return response()->json(['message' => 'Category not found'], 404);
    //        }

           
    //     }
    // }
    // public function destroy($id)
    // {
    //     $category = Category::findOrFail($id);
    //     $category->delete();
    //     return response()->json([
    //         'redireact' => 'category',
    //         'message' => 'Xóa sản phẩm thành công'
    //     ]);
    // }


}
