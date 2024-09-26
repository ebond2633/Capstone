package com.capstone.backend.controller;


//import com.capstone.backend.common.UserRepository;
//import com.capstone.backend.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api")
//public class UserController {
//    private final UserRepository userRepository;
//
//
//    @Autowired
//    public UserController(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getUsers() {
//        List<User> users = userRepository.findAll();
//        return ResponseEntity.ok(users);
//    }
//
//@PostMapping("/createuser")
//public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
//    String name = loginData.get("name");
//    public ResponseEntity<User> createUser(@RequestBody User user) {
//        String password = loginData.get("password");
//        if (user.getPassword() == null || user.getPassword().isEmpty()) {
//            User user = userRepository.findByNameAndPassword(name, password);
//            if (user == null) {
//                return ResponseEntity.badRequest().body(null);
//            }
//            return ResponseEntity.badRequest().body("Invalid name or password");
//        }
//        Map<String, Object> response = new HashMap<>();
//        String token = "dummy-token";
//        User savedUser = userRepository.save(user);
//        return ResponseEntity.status(201).body(savedUser);
//    }
//
//    response.put("token", token);
//    response.put("userData", user);
//    @PostMapping("/login")
//    return ResponseEntity.ok(response);
//}
//public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
//}