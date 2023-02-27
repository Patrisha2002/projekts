<?php

class CarEntity{
    public $sku;
    public $name;
    public $price;
    public Attributes $attributes;

    /**
     * @param $sku
     * @param $name
     * @param $price
     * @param Attributes $attributes
     */
    public function __construct($sku, $name, $price, Attributes $attributes)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->attributes = $attributes;
    }
}