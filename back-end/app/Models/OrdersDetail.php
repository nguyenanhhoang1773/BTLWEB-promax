<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Orders;
use App\Models\Product;

class OrdersDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price',
    ] ;
    public function order()
    {
        return $this->belongsTo(Orders::class,'order_id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }
}
