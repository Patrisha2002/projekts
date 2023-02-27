<?php
include_once 'Repository/QuestionRepository.php';
include_once 'Response/Response.php';

Class QuestionService{

    private QuestionRepository $questionRepository;

    public function __construct(){
        $this -> questionRepository = new QuestionRepository();
        return $this;
    }

    public function getAllQuestions(){
        return $this->questionRepository->getAllQuestions();
    }

    public function addQuestion($q){
        $this->questionRepository->addQuestion($q);
    }

    public function updateQuestion($q, $id){
        $this -> questionRepository -> updateQuestion($q, $id);
    }
}