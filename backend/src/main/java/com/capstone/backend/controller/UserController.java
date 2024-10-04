package com.capstone.backend.controller;


import com.capstone.backend.common.UserRepository;
import com.capstone.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserRepository userRepository;


    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
    @Autowired
    private PasswordEncoder passwordEncoder;
@PostMapping("/createuser")
public ResponseEntity<User> createUser(@RequestBody User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    User savedUser = userRepository.save(user);
    return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
}

@PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
    String name = loginData.get("name");
    String password = loginData.get("password");
    if (name == null || password == null || name.isEmpty() || password.isEmpty()) {
        return ResponseEntity.badRequest().body("Invalid name or password");
    }
    User user = userRepository.findByNameAndPassword(name, password);
    if (user == null) {
        return ResponseEntity.badRequest().body("Invalid name or password");
    }
    Map<String, Object> response = new HashMap<>();
    String token = "dummy-token";
    response.put("token", token);
    response.put("userData", user);
    return ResponseEntity.ok(response);
}
}
