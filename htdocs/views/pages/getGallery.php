<?php

header("Access-Control-Allow-Origin: *");
require_once 'Controllers/GalleryController.php';


$galleryController = new GalleryController();

$gallery = $galleryController->getGallery();
echo $gallery;