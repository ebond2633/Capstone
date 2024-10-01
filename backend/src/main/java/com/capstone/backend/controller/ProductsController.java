package com.capstone.backend.controller;

import com.capstone.backend.model.Products;
import com.capstone.backend.common.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/products")
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public Products getProductById(@PathVariable int id) {
        return productsRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ResponseEntity<Products> createProduct(@RequestBody Products product) {

        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
}


