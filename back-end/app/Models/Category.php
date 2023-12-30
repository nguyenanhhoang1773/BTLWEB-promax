<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Category extends Model
{
  use HasFactory;
  protected $fillable = [
    'name',
    'status',
    'parent_id',
  ];
  public function category()
  {
    return $this->belongsTo(Category::class);
  }
  public function scopeSearch($query)
  {
    if ($key = request()->key) {
      $query = $query->where('name', 'like', '%' . $key . '%');
    }
    return $query;
  }
}
