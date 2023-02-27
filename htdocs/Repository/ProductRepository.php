<?php

include_once 'Database/db.php';

Class ProductRepository{

    private Database $db;

    public function __construct(){
        $this -> db = new Database();
        return $this;
    }

    public function getAllProducts(){
        return $this -> db -> query("SELECT prod.Product_id, prod.SKU, prod.Name, prod.Price
        FROM products prod");
    }

    public function getProduct($sku){
        return $this -> db -> query("SELECT prod.Product_id, prod.SKU, prod.Name, prod.Price, prod.Production_year, prod.Engine_volume, prod.Horse_power, prod.Color, prod.Engine_type, prod.Transmission, prod.Body, prod.Heated_seats, prod.Heated_steering_wheel, prod.Navigation_system, prod.Power_liftage, prod.Brake_assist,  prod.Stability_control, prod.Leather_interior, prod.Bluetooth,  prod.Cruise_control, prod.Toning, prod.Hands_free
        FROM products prod
        WHERE prod.SKU = '$sku'");
    }
    public function addProduct(CarEntity $product){

        $sku = $product->sku;
        $name = $product->name;
        $price = $product->price;
        $prodYear = $product->attributes->prodYear;
        $engineVolume = $product->attributes->engineVolume;
        $horsePower = $product->attributes->horsePower;
        $color = $product->attributes->color;
        $engineType = $product->attributes->engineType;
        $transmission = $product->attributes->transmission;
        $body = $product->attributes->body;
        $heatedSeats = $product->attributes->heatedSeats;
        $heatedSteeringWheel = $product->attributes->heatedSteeringWheel;
        $navigationSystem = $product->attributes->navigationSystem;
        $powerLiftage = $product->attributes->powerLiftage;
        $brakeAssist = $product->attributes->brakeAssist;
        $stabilityControl = $product->attributes->stabilityControl;
        $leatherInterior = $product->attributes->leatherInterior;
        $bluetooth = $product->attributes->bluetooth;
        $cruiseControl = $product->attributes->cruiseControl;
        $toning = $product->attributes->toning;
        $handsFree = $product->attributes->handsFree;

        $this -> db -> execute("INSERT INTO `products`(`SKU`, `Name`, `Price`, `Production_year`, `Engine_volume`, `Horse_power`, `Color`, `Engine_type`, `Transmission`, `Body`, `Heated_seats`, `Heated_steering_wheel`, `Navigation_system`, `Power_liftage`, `Brake_assist`, `Stability_control`, `Leather_interior`, `Bluetooth`, `Cruise_control`, `Toning`, `Hands_free`)
                                VALUES ('$sku', '$name', '$price', '$prodYear', '$engineVolume', '$horsePower', '$color', '$engineType', '$transmission', '$body', '$heatedSeats', '$heatedSteeringWheel', '$navigationSystem', '$powerLiftage', '$brakeAssist', '$stabilityControl', '$leatherInterior', '$bluetooth', '$cruiseControl', '$toning', '$handsFree')");

    }

    public function deleteProduct($skuArray){

        foreach($skuArray as $sku){
            $productId = $this -> getProductIdBySku($sku);
            $data = $this -> db -> query("SELECT * FROM products prod WHERE prod.Product_id = $productId");
            $dataDecoded = json_decode($data);  //from here we get array filled with stdClass objects (2d array)
            

            //to get easier at first will data convert 2d array to 1d array

            $oneDimensionalArray = array();
            foreach ($dataDecoded as $item) {
                foreach ($item as $key => $value) {
                    $oneDimensionalArray[$key] = $value;
                } 
            }

            $prodId = $oneDimensionalArray['Product_id'];

            $this -> db -> execute("DELETE FROM products WHERE Product_id = '$prodId' ");
        }

    }

    public function getProductIdBySku($sku){
        $data = $this -> db -> query("SELECT Product_id FROM products prod WHERE prod.SKU = '$sku'");
        $dataDecoded = json_decode($data);

        $product = $dataDecoded['0'];  //index = 0, because will get array with only 1 element  

        $id = array_values((array)$product)[0];
        // $dataDecoded is Array, but $product is stdClass Object, so I'm type-casting it as array and getting value 
        // index = 0, because will get object with only 1 parameter   

        return $id;
    }

    public function checkForDuplicateSku($sku){
        $data = $this -> db ->query("SELECT * FROM products prod WHERE prod.SKU = '$sku' ");  
        if ($data != '[]') return new Response(true, "Duplicate SKU");  //$data can contain only product with SKU = $sku otherwise $data = '[]' 
        return new Response(false);   // returning "false" means product with this sku wasn't found in DB; 
    }
}