<?php

include_once 'Repository/UserRepository.php';
include_once 'Entities/UserEntity.php';
include_once 'Response/Response.php';

Class UserService
{

    private UserRepository $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
        return $this;
    }

    public function getAllUsers(){
        return $this->userRepository->getAllUsers();
    }

    public function getUser($userId){
        return $this->userRepository->getUser($userId);
    }

    public function getUserRole($userId){
        return $this->userRepository->getUserRole($userId);
    }

    public function addUser(UserEntity $user){
        $username = $user->username;
        $response = $this -> userRepository -> checkForDuplicateUsername($username);

        if ($response->isSucceed == true) {     //if response have parameter "true" => product with same sku was found in DB
            return new Response(false, "Duplicate username");
        }

        $this->userRepository->addUser($user);
        return new Response(true);
    }

    public function checkForDuplicateUsername($username){
        return $this ->userRepository->checkForDuplicateUsername($username);
    }

    public function verifyPassword(UserEntity $user){
        return $this -> userRepository -> verifyPassword($user);
    }
}