package com.example.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.portfolio.model.User;
import com.example.portfolio.service.UserService;
import com.example.portfolio.DTO.RegisterUser;
import com.example.portfolio.DTO.LoginUser;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
public class UserController{

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterUser request) {
        return ResponseEntity.ok(userService.register(request));
    }
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginUser request) {
        return ResponseEntity.ok(userService.login(request));
    }   

    // @GetMapping("/{id}")
    // public ResponseEntity<User> getUser(@PathVariable Long id) {
    //     return ResponseEntity.ok(userService.getUserById(id));
    // }

    // @PutMapping("/{id}")
    // public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
    //     return ResponseEntity.ok(userService.updateUser(id, updatedUser));
    // }
}