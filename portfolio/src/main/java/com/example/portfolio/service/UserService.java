package com.example.portfolio.service;

import com.example.portfolio.model.User;
import com.example.portfolio.repository.UserRepository;
import com.example.portfolio.DTO.RegisterUser;
import com.example.portfolio.DTO.LoginUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(RegisterUser registerUser) {
        if (userRepository.findByEmail(registerUser.getEmail()) != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        User user = new User();
        user.setName(registerUser.getName());
        user.setEmail(registerUser.getEmail());
        user.setPassword(registerUser.getPassword());

        return userRepository.save(user);
    }

    public User login(LoginUser request) {
        User user = userRepository.findByEmail(request.getEmail());

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // public User updateUser(Long id, User updatedUser) {
    //     return userRepository.findById(id).map(user -> {
    //         user.setUsername(updatedUser.getUsername());
    //         user.setEmail(updatedUser.getEmail());
    //         user.setPassword(updatedUser.getPassword());
    //         return userRepository.save(user);
    //     }).orElse(null);
    // }
}
