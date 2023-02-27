<?php

include_once 'Services/GalleryService.php';
Class GalleryController{
    private GalleryService $galleryService;

    public function __construct(){
        $this -> galleryService = new GalleryService();
        return $this;
    }

    public function getGallery(){
        return $this->galleryService->getGallery();
    }

}
