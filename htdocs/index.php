<?php

include_once 'Router/Routing.php';

$url = $_SERVER['REQUEST_URI'];
$sku = "1";
$qId = "1";
if (isset($_GET['sku'])){
    $sku = $_GET['sku'];
}
if (isset($_GET['qId'])){
    $qId = $_GET['qId'];
}
$router = new Router();
$router -> addRoute('/', 'index.html');
$router -> addRoute('/register', 'register.html');
$router -> addRoute('/login', 'login.html');
$router -> addRoute('/questions', 'questions.html');
$router -> addRoute('/getQuestions', 'getQuestions.php');
$router -> addRoute('/gallery', 'gallery.html');
$router -> addRoute('/getGallery', 'getGallery.php');
$router -> addRoute("/updateQuestion?qId=$qId", 'updateQuestion.html');
$router -> addRoute('/updateQuestionById', 'updateQuestionById.php');
$router -> addRoute('/loginUser', 'loginUser.php');
$router -> addRoute('/logoutUser', 'logoutUser.php');
$router -> addRoute('/registerUser', 'registerUser.php');
$router -> addRoute("/details?sku=$sku", 'details.html');
$router -> addRoute('/productadd', 'productadd.html');
$router -> addRoute('/addProduct', 'addProduct.php');
$router -> addRoute('/getProducts', 'getProducts.php');
$router -> addRoute("/getProduct?sku=$sku", 'getProduct.php');
$router -> addRoute('/deleteProducts', 'deleteProducts.php');
$router -> addRoute('/checkForDuplicateSku', 'checkForDuplicateSku.php');
$router -> addRoute('/checkForDuplicateUsername', 'checkForDuplicateUsername.php');
$router -> addRoute('/submitQuestion', 'submitQuestion.php');

$router -> route($url);
