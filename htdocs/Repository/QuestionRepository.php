<?php
include_once 'Database/db.php';

Class QuestionRepository{

    private Database $db;

    public function __construct(){
        $this -> db = new Database();
        return $this;
    }

    public function addQuestion($q){
        $this -> db -> execute("INSERT INTO `questions`(`Question`)
                                VALUES ('$q')");
    }

    public function getAllQuestions(){
        return $this -> db -> query("SELECT q.Question_id, q.Question
        FROM questions q");
    }

    public function updateQuestion($q, $id){
        $this -> db -> execute("UPDATE `questions` SET `Question`='$q'
                                WHERE `Question_id`='$id'");
    }
}