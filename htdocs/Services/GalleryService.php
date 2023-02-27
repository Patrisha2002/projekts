<?php
include_once 'Repository/GalleryRepository.php';
include_once 'Response/Response.php';

Class GalleryService{

    private GalleryRepository $galleryRepository;

    public function __construct(){
        $this -> galleryRepository = new GalleryRepository();
        return $this;
    }

    public function getGallery(){
        return $this->galleryRepository->getGallery();
    }

}