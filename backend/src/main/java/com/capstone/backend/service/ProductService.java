package com.capstone.backend.service;

import com.capstone.backend.common.ProductsRepository;
import com.capstone.backend.model.Products;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }
    public Products getProductById(int id) {
        return productsRepository.findById(id).orElse(null);
    }
    public Products createProduct(Products product) {
        return productsRepository.save(product);
    }
    public void deleteProduct(int id) {
        productsRepository.deleteById(id);
    }
    public Products updateProduct(Products product) {
        return productsRepository.save(product);
    }
}
