<?php

header("Access-Control-Allow-Origin: *");
require_once 'Controllers/UserController.php';
require_once 'Response/Response.php';

$userController = new UserController();

//Getting data from request
$username = $_POST['username'];
$password = $_POST['password'];

$newUser = new UserEntity($username, $password);
$response = $userController->addUser($newUser);
if ($response->isSucceed) header('Location: /');
