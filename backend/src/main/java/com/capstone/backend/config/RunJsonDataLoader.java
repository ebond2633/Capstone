package com.capstone.backend.config;

import com.capstone.backend.model.Users;
import com.capstone.backend.model.Products;
import com.capstone.backend.model.Orders;
import com.capstone.backend.common.UsersRepository;
import com.capstone.backend.common.ProductsRepository;
import com.capstone.backend.common.OrdersRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Component
public class RunJsonDataLoader implements CommandLineRunner {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private OrdersRepository ordersRepository;

    @Override
    public void run(String... args) throws Exception {
        loadUsersData();
        loadProductsData();
        loadOrdersData();
    }

    private void loadUsersData() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Users>> typeReference = new TypeReference<List<Users>>() {};
        InputStream inputStream = new ClassPathResource("data/users.json").getInputStream();
        List<Users> users = mapper.readValue(inputStream, typeReference);
        usersRepository.saveAll(users);
    }

    private void loadProductsData() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Products>> typeReference = new TypeReference<List<Products>>() {};
        InputStream inputStream = new ClassPathResource("data/products.json").getInputStream();
        List<Products> products = mapper.readValue(inputStream, typeReference);
        productsRepository.saveAll(products);
    }

    private void loadOrdersData() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Orders>> typeReference = new TypeReference<List<Orders>>() {};
        InputStream inputStream = new ClassPathResource("data/orders.json").getInputStream();
        List<Orders> orders = mapper.readValue(inputStream, typeReference);
        ordersRepository.saveAll(orders);
    }
}
