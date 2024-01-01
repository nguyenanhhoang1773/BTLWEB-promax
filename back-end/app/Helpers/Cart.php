<?php

namespace App\Helpers;

class Cart
{
    public $items = [];
    public $totalquantity = 0;
    public  $totalprice = 0;

    public function __construct()
    {
        $this->items = session('cart') ? session('cart') : [];
        $this->totalquantity = $this->totalQuantity();
        $this->totalprice = $this->totalPriceAll();
    }
    public function list()
    {
        return $this->items;
    }
    public function add($product, $quantity = 1)
    {
        $item = [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->sale_price > 0 ? $product->sale_price : $product->price,
            'image' => $product->image,
            'quantity' => $quantity 
        ];

        $this->items[$product->id] = $item;

        session(['cart' =>  $this->items]);
    }


    public function delete($id)
    {
        if (isset($this->items[$id])) {
            unset($this->items[$id]); 
            session(['cart' =>  $this->items]);
        }
    }

    public function totalPriceAll()
    {
        $total = 0;
        foreach ($this->items as $item) {

            $total += $item['price'] * $item['quantity'];
            
        }
        return $total;
    }

    public function totalQuantity()
    {
        $total = 0;
        foreach ($this->items as $item) {
            $total += $item['quantity'];
        }
        return $total;
    }
    public function clear()
    {        
            session(['cart' =>  null]);      
    }
}
