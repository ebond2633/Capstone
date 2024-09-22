package com.capstone.backend.config;


import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

@Component
@Configuration
public class DatabaseCleanUp {

    @Autowired
    private DataSource dataSource;

    private final Logger logger = LoggerFactory.getLogger(DatabaseCleanUp.class);

    public DatabaseCleanUp(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public DatabaseCleanUp databaseCleanUp() {
        return new DatabaseCleanUp(dataSource);
    }

    @PreDestroy
    public void dropDatabaseTable() {
        try (Connection connection = dataSource.getConnection()) {

            Statement statement = connection.createStatement();

            statement.executeUpdate("SET FOREIGN_KEY_CHECKS=1");

            statement.executeUpdate("DROP TABLE IF EXISTS plants");
            statement.executeUpdate("DROP TABLE IF EXISTS users_roles");
            statement.executeUpdate("DROP TABLE IF EXISTS roles_users");
            statement.executeUpdate("DROP TABLE IF EXISTS roles");
            statement.executeUpdate("DROP TABLE IF EXISTS users");

            logger.info("Tables dropped successfully");
        } catch (SQLException e) {
            logger.error("Error dropping tables", e);
        }
    }
}

