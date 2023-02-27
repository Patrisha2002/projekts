<?php

class Response{

    public bool $isSucceed;
    public $message;

    public function __construct($responseValue, $responseMessage = null){
        $this -> isSucceed = $responseValue;
        $this -> message = $responseMessage;
        return $this;
    }

}