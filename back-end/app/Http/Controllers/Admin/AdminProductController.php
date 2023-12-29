<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class AdminProductController extends Controller
{
    //
    public function index()
    {
        $product = Product::all();
        
        return response()->json(['product' => $product], 200);
    }

    public function showListByID($id)
    {
        $product = Product::find($id);
        return response()->json(['product' => $product], 200);
    }

    public function store(Request $request)
    {
       
        $validatedData = $request->validate([
            'name'=>'required',
            'price'=>'required',
            'sale_price'=>'required',
            'category_id'=>'required',
            'slug'=>'required',

        ]);
        $product = Product::create($validatedData);
        return response()->json(['product' => $product], 200);
        
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name'=>'required',
            'price'=>'required',
            'sale_price'=>'required',
            'category_id'=>'required',
            'slug'=>'required',

        ]);
        $product = Product::findOrFail($id);

        $product->update($validatedData);

        return response()->json(['product' => $product], 200);
        
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(['product' => $product], 200);
    }
}
