<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class AdminProductController extends Controller
{
    //
    public function index()
    {
        $product = Product::all();
        return response()->json([
            'message' => 'Successfully',
            'product' => $product]);
    }   
    public function showListByID($id)
    {
        $product = Product::find($id);
        return $product;
    }

    public function store(Request $request)
    {
       
        $rules = [
            'name'=>'required',
            'price'=>'required',
            'sale_price'=>'required',
            'category_id'=>'required',
            'slug'=>'required',
        ];
        $messages = [
            'name.required' => 'Tên không được để trống',
            'price.required' => 'Giá không được để trống',
            'sale_price' => 'Giá giảm giá không được để trống',
            'category_id.required'=> 'Danh mục không được để trống',
            'slug'=> 'slug không được để trống',
        ];
        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            $errors = $validator->errors()->messages();
            return response()->json(['success' => false, 'errors' => $errors]);
        } else {
            $product = Product::create($request->all());
            return response()->json(['category' => $product], 200);
        }
        
        
    }

    public function update(Request $request, $id)
    {
        $rules = [        
            'name' => 'required',
           
        ];
        $messages = [            
            'name.required' => 'Tên không được để trống',         
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();
            return response()->json(['success' => false, 'errors' => $errors]);
        } else {
            $product = Product::findOrFail($id);
            if($product){
                $product->update($request->all());
                return response()->json(['message' => 'Product updated successfully','category' => $product], 200);
            }
           else {
                return response()->json(['message' => 'Product not found'], 404);
           }

        }
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return $product;
    }
}
