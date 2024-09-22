package com.capstone.backend.config;

import com.capstone.backend.common.OrdersRepository;
import com.capstone.backend.common.PlantsRepository;
import com.capstone.backend.common.UsersRepository;
import com.capstone.backend.model.Orders;
import com.capstone.backend.model.Plants;
import com.capstone.backend.model.User; // Correct import
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {
    private final Logger logger = org.slf4j.LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final PlantsRepository plantRepository;
    private final UsersRepository usersRepository;
    private final OrdersRepository ordersRepository;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(PlantsRepository plantRepository, UsersRepository usersRepository, OrdersRepository ordersRepository, ObjectMapper objectMapper) {
        this.plantRepository = plantRepository;
        this.usersRepository = usersRepository;
        this.ordersRepository = ordersRepository;
        this.objectMapper = objectMapper;
    }

    private <T> void loadData(JpaRepository<T, ?> repository, String filePath, TypeReference<List<T>> typeReference, String entityName) {
        if (repository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream(filePath)) {
                List<T> entities = objectMapper.readValue(inputStream, typeReference);
                logger.info("{} loaded from json file: {}", entityName, entities);
                repository.saveAll(entities);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load data from json file", e);
            }
        } else {
            logger.info("{} data already loaded", entityName);
        }
    }

    @Override
    public void run(String... args) throws Exception {
        loadData(plantRepository, "/data/plants.json", new TypeReference<List<Plants>>() {}, "Plants");
        loadData(usersRepository, "/data/users.json", new TypeReference<List<User>>() {}, "Users");
        loadData(ordersRepository, "/data/orders.json", new TypeReference<List<Orders>>() {}, "Orders");
    }
}

