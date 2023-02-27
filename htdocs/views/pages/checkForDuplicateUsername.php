<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/UserController.php';

$username = file_get_contents("php://input");
$userController = new UserController();

$response = $userController -> checkForDuplicateUsername($username);
print_r(json_encode($response));