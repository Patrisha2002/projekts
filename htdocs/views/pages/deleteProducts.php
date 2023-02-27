<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/ProductController.php';
$separator = ';';

$productController = new ProductController();

/* in explode() limit = -1, because always file_get_contents("php://input")
 ends with $separator, so last object will be null - I don't need it */

$skuArray = explode($separator, file_get_contents("php://input"), -1) ;
$productController -> deleteProduct($skuArray);