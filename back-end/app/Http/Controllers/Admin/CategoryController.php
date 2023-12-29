<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

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
        $validatedData = $request->validate([
            'name' => 'required',
            'status' => 'required',
            'parent_id' => 'required',
        ]);
        $category = Category::findOrFail($id);

        $category->update($validatedData);

        return response()->json(['category' => $category], 200);
        
    }
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return $category;
    }
}
