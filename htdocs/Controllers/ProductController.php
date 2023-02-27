<?php

include_once 'Services/ProductService.php';

class ProductController{
    
    private ProductService $prodService;

    public function __construct(){
        $this -> prodService = new ProductService();
        return $this;
    }

    public function getProduct($sku){
        return $this->prodService->getProduct($sku);
    }
    public function getAllProducts(){
        return $this->prodService->getAllProducts();
    }

    public function addProduct(CarEntity $product){
        $response = $this->prodService->addProduct($product);
        return $response;
    }

    public function deleteProduct($skuArray){
        $this->prodService->deleteProduct($skuArray);
        return ;
    }

    public function getProductIdBySku($sku){
        return $this->prodService->getProductIdBySku($sku);
    }

    public function checkForDuplicateSku($sku){
        return $this ->prodService->checkForDuplicateSku($sku);
    }
}