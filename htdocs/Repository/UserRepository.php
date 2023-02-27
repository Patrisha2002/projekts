<?php

include_once 'Database/db.php';

Class UserRepository
{
    private Database $db;

    public function __construct(){
        $this -> db = new Database();
        return $this;
    }

    public function getAllUsers(){
        return $this -> db -> query("SELECT u.id, u.username
        FROM users u");
    }

    public function getUser($userName){
        return $this -> db -> query("SELECT u.id, u.username
        FROM users u
        WHERE u.username = '$userName'");
    }

    public function getUserRole($userName){
        return $this -> db -> query("SELECT u.User_role
        FROM users u
        WHERE u.username = '$userName'");
    }

    public function addUser(UserEntity $user){
        $username = $user->username;
        $password = $user->password;
        $userRole = $user->userRole;

        $this -> db -> execute("INSERT INTO `users`(`username`, `password`, `User_role`)
                                VALUES ('$username', '$password', '$userRole')");

    }

    public function checkForDuplicateUsername($username){
        $data = $this -> db ->query("SELECT * FROM users u WHERE u.username = '$username'");
        if ($data != '[]') return new Response(true, "Duplicate username");  //$data can contain only product with username = $username otherwise $data = '[]'
        return new Response(false);   // returning "false" means product with this username wasn't found in DB;
    }

    public function verifyPassword(UserEntity $user){
        $username = $user->username;
        $password = $user->password;

        $data = $this -> db ->query("SELECT * FROM users u WHERE u.username = '$username' and u.password = '$password'");
        if ($data != '[]') return new Response(true, "Invalid credentials");
        return new Response(false);   // returning "false" means user with this username and password wasn't found in DB;
    }
}