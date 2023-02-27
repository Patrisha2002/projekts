<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/QuestionController.php';

$questionController = new QuestionController();

//Getting data from request
$q = $_POST['msg'];
$qId = $_POST['qId'];

$questionController->updateQuestion($q, $qId);
header('Location: /');
