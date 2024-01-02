<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use App\Models\ImgProduct;
use App\Models\OrdersDetail;


class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'image',
        'price',
        'sale_price',
        'category_id',
        'slug',
        'description',
        'stock',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    //localScope
    public function scopeSearch($query)
    {
        if ($key = request()->key) {
            $query = $query->where('name', 'like', '%' . $key . '%');
        }

        return $query;
    }
    public function images()
    {
        return $this->hasMany(ImgProduct::class, 'product_id', 'id');
    }


    public function orderDetails()
    {

        return $this->hasMany(OrdersDetail::class);
    }
    public function carts()
    {
        return $this->hasMany(Cart::class , 'product_id');
    }
}
