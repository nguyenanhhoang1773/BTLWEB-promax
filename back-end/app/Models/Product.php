<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<<<<<<< HEAD
use DB;
=======
use App\Models\ImgProduct;
use App\Models\OrdersDetail;

>>>>>>> 0bcaf3e6a9e098303ba13e294ba2d9365e43ccc4
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

    public function getCategoryID(){
        $sql = 'SELECT name,id FROM categories';
        return DB::select($sql);
    }
    public function insertProduct($name,$image,$price,$sale_price,$category_id,$slug,$description,$created_at){
        $arr =[$name,$image,$price,$sale_price,$category_id,$slug,$description,$created_at];
        $sql = 'INSERT INTO products (name,image,price,sale_price,category_id,slug,description,created_at) 
        VALUES (?,?,?,?,?,?,?,?)';
        return DB::insert($sql,$arr);
    }
    public function showProduct(){
        $sql = 'SELECT * FROM products';
        return DB::select($sql);
    }
    public function getDataProduct($id){
        $sql = 'SELECT * FROM products WHERE id = ?';
        return DB::select($sql,[$id]);
    }



    
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
}
