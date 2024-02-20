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
        $products = Product::where('name', 'like', '%' . $req->value . '%')->get();;
        return response()->json($products);
    }
    // public function searchKey(Request $req)
    // {
    //     $products = Product::where('name', 'like', '%' . $req->value . '%')->get();;

    //     return response()->json($products);
    // }
}
