<?php
header("Access-Control-Allow-Origin: *");
require_once 'Controllers/QuestionController.php';


$questionController = new QuestionController();

$questionArray = $questionController -> getAllQuestions();
echo $questionArray;