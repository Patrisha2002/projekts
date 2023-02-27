<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/ProductController.php';

$sku = file_get_contents("php://input");
$productController = new ProductController();

$response = $productController -> checkForDuplicateSku($sku);
print_r(json_encode($response));