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

        $productData = $products->map(function ($product) {
            $product->image = asset('storage/images/' . $product->image);
            $product->price = number_format($product->price);
            $product->sale_price = number_format($product->sale_price);
            return $product;
        });
        // dd($productData);
        return response()->json($productData);
      
    }
}
