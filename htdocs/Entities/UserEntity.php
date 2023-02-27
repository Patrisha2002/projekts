<?php

class UserEntity
{
    public $username;
    public $password;
    public $userRole;

    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
        $this->userRole = 1;
    }
}