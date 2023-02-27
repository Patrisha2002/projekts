<?php

include_once 'Services/QuestionService.php';
Class QuestionController{
    private QuestionService $questionService;

    public function __construct(){
        $this -> questionService = new QuestionService();
        return $this;
    }

    public function getAllQuestions(){
        return $this->questionService->getAllQuestions();
    }

    public function addQuestion($q){
        $this->questionService->addQuestion($q);
    }

    public function updateQuestion($q, $id){
        $this -> questionService -> updateQuestion($q, $id);
    }
}