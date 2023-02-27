<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/ProductController.php';
require_once 'Entities/CarEntity.php';
require_once 'Entities/Attributes.php';
require_once 'Response/Response.php';

$productController = new ProductController();

//Getting data from request
$sku = $_POST['sku'];
$name = $_POST['name'];
$price = $_POST['price'];
$prodYear = $_POST['prodYear'];
$engineVolume = $_POST['engineVolume'];
$horsePower = $_POST['horsePower'];
$color = $_POST['color'];
$engineType = $_POST['engineType'];
$transmission = $_POST['transmission'];
$body = $_POST['body'];
$heatedSeats = $_POST['heatedSeats'];
$heatedSteeringWheel = $_POST['heatedSteeringWheel'];
$navigationSystem = $_POST['navigationSystem'];
$powerLiftage = $_POST['powerLiftage'];
$brakeAssist = $_POST['brakeAssist'];
$stabilityControl = $_POST['stabilityControl'];
$leatherInterior = $_POST['leatherInterior'];
$bluetooth = $_POST['bluetooth'];
$cruiseControl = $_POST['cruiseControl'];
$toning = $_POST['toning'];
$handsFree = $_POST['handsFree'];
//Creating factory and adding products

$attributes = new Attributes($prodYear, $engineVolume, $horsePower, $color, $engineType,
    $transmission, $body, $heatedSeats, $heatedSteeringWheel,
    $navigationSystem, $powerLiftage, $brakeAssist, $stabilityControl,
    $leatherInterior, $bluetooth, $cruiseControl, $toning, $handsFree);

$newProduct = new CarEntity($sku, $name, $price, $attributes);
$response = $productController->addProduct($newProduct);
if ($response->isSucceed) header('Location: /');



