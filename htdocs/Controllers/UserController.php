<?php

include_once 'Services/UserService.php';
include_once 'Entities/UserEntity.php';
include_once 'Response/Response.php';

Class UserController
{

    private UserService $userService;

    public function __construct()
    {
        $this->userService = new UserService();
        return $this;
    }

    public function getAllUsers(){
        return $this->userService->getAllUsers();
    }

    public function getUser($userId){
        return $this->userService->getUser($userId);
    }

    public function getUserRole($userId){
        return $this->userService->getUserRole($userId);
    }

    public function addUser(UserEntity $user){
        $response = $this->userService->addUser($user);
        return $response;
    }

    public function checkForDuplicateUsername($username){
        return $this ->userService->checkForDuplicateUsername($username);
    }

    public function verifyPassword(UserEntity $user){
        return $this -> userService -> verifyPassword($user);
    }
}