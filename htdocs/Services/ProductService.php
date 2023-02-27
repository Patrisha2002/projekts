<?php

include_once 'Repository/ProductRepository.php';
include_once 'Response/Response.php';

Class ProductService{

    private ProductRepository $prodRepository;

    public function __construct(){
        $this -> prodRepository = new ProductRepository();
        return $this;
    }

    public function getAllProducts(){
        return $this->prodRepository->getAllProducts();
    }

    public function getProduct($sku){
        return $this->prodRepository->getProduct($sku);
    }
    public function addProduct(CarEntity $product){
        $sku = $product->sku;
        $response = $this -> prodRepository -> checkForDuplicateSku($sku);  
        if ($response->isSucceed == true) {     //if response have parameter "true" => product with same sku was found in DB   
            return new Response(false, "Duplicate SKU");
        }

        $this -> prodRepository->addProduct($product);
        return new Response(true);
    }

    public function deleteProduct($skuArray){
        $this -> prodRepository->deleteProduct($skuArray);
        return ;
    }

    public function getProductIdBySku($sku){
        return $this -> prodRepository->getProductIdBySku($sku);
    }

    public function checkForDuplicateSku($sku){
        return $this -> prodRepository->checkForDuplicateSku($sku);
    }

}