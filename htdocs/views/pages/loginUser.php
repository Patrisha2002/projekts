<?php

header("Access-Control-Allow-Origin: *");
require_once 'Controllers/UserController.php';
require_once 'Response/Response.php';

$userController = new UserController();

//Getting data from request
$username = $_POST['username'];
$password = $_POST['password'];
$newUser = new UserEntity($username, $password);
$userRole = $userController->getUserRole($username);
$response = $userController->verifyPassword($newUser);
if ($response->isSucceed) {
    $cookieName = "loggedIn";
    $cookieValue = "loginCookie";
    setcookie($cookieName, $cookieValue, time() + 3600, "/");
    setcookie("userRole", $userRole[14], time() + 3600, "/");
    header('Location: /');
}
