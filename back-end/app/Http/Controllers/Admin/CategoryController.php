<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $category = Category::all();
        //dd($category);
        return $category;
    }   
    
    public function showListByID($id){
        $category = Category::findOrFInd($id);
        return $category;
    }

    public function store(Request $request){
        $category = Category::create($request->all());
        return $category;
    }

    public function update(Request $request, $id){
        $category = Category::findOrFail($id);
        $category->update($request->all()); 
        return $category;
    }
    public function destroy($id){
        $category = Category::findOrFail($id);
        $category->delete();
        return $category;
    }
}
