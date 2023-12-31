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
}
