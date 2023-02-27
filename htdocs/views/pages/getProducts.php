<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/ProductController.php';


$productController = new ProductController();

$productArray = $productController -> getAllProducts();
echo $productArray;