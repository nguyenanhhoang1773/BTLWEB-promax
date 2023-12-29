<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;


class SearchController extends Controller
{
    public function searchProduct(Request $req)
    {
        $keyword = $req->input('key');
        $products = Product::orderBy('created_at', 'desc')
            ->Search()
            ->paginate(5);
        return view('fe.listproducts.search', compact('products', 'keyword'));
    }
    // public function laptop($category)
    // {
    //     // dd($category);
    //     $categoryy = Category::findOrFail($category);
    //     $products = $categoryy->products;

    //     return view('fe.listproducts.laptop', compact('categoryy', 'products'));
    // }
    // public function manhinh($category)
    // {
    //     $categoryy = Category::findOrFail($category);
    //     $products = $categoryy->products;

    //     return view('fe.listproducts.manhinh', compact('categoryy', 'products'));
    // }
    // public function banphim($category)
    // {
    //     $categoryy = Category::findOrFail($category);
    //     $products = $categoryy->products;

    //     return view('fe.listproducts.banphim', compact('categoryy', 'products'));
    // }
    // public function chuot($category)
    // {
    //     $categoryy = Category::findOrFail($category);
    //     $products = $categoryy->products;

    //     return view('fe.listproducts.chuot', compact('categoryy', 'products'));
    // }
    // public function tainghe($category)
    // {
    //     $categoryy = Category::findOrFail($category);
    //     $products = $categoryy->products;

    //     return view('fe.listproducts.tainghe', compact('categoryy', 'products'));
    // }
}
