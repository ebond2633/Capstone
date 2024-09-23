package com.capstone.backend.controller;

import com.capstone.backend.model.Products;
import com.capstone.backend.common.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/products")
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }
}
