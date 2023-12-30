<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<<<<<<< HEAD

use DB;

use App\Models\Product;


=======
use App\Models\Product;

>>>>>>> 65dd5fad54000a0bcdc4865da0086917bf5c89ce
class Category extends Model
{
  use HasFactory;
  protected $fillable = [
    'name',
    'status',
    'parent_id',
  ];
<<<<<<< HEAD

  public function insertCategory($category_name,$status,$created_at){
    $arr=[$category_name,$status,$created_at];
    $sql = 'INSERT INTO categories (name,status,created_at) VALUES (?,?,?)';
    return DB::insert($sql, $arr);
}
public function getParentID(){
    $sql ='SELECT name,id FROM categories';
    return DB::select($sql);
}
public function showData(){
    $sql = 'SELECT * FROM categories';
    return DB::select($sql);
}
public function getData($id){
  $sql = 'SELECT * FROM categories WHERE id = ?';
  return  DB::select($sql,[$id]);
  
}
public function updateCategory($category_name,$parent_id,$updated_at,$id){
  $sql = 'UPDATE categories SET name=? , parent_id=? , updated_at=? WHERE id=?';
  $arr = [$category_name,$parent_id,$updated_at,$id];
  return  DB::update($sql,$arr);
}
public function deleteCategory($id){
  $sql = 'DELETE FROM categories WHERE id=?';
  return DB::delete($sql,[$id]);
}

  public function products()
=======
  public function category()
>>>>>>> 65dd5fad54000a0bcdc4865da0086917bf5c89ce
  {
    return $this->belongsTo(Category::class);
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 65dd5fad54000a0bcdc4865da0086917bf5c89ce
=======
  public function scopeSearch($query)
  {
    if ($key = request()->key) {
      $query = $query->where('name', 'like', '%' . $key . '%');
    }
    return $query;
  }
>>>>>>> 30944fff1c5faff877ec22e14f247a12cb09a419
}
