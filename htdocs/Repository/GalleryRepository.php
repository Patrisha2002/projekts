<?php
include_once 'Database/db.php';

Class GalleryRepository{

    private Database $db;

    public function __construct(){
        $this -> db = new Database();
        return $this;
    }

    public function getGallery(){
        return $this -> db -> query("SELECT g.Photo
        FROM gallery g");
    }

}