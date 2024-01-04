<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrdersDetail;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'total_amount',
        'phone',
        'address',
        'note',
    ] ;
    public function customer(){
        
        return $this->belongsTo(User::class, 'customer_id');
    }
    public function orderDetails()
    {
        return $this->hasMany(OrdersDetail::class,'order_id');
    }
}
