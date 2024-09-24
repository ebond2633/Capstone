package com.capstone.backend.common;

import com.capstone.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

User findByName(String name);
    User findByEmail(String email);
    User findByNameAndPassword(String name, String password);

}
