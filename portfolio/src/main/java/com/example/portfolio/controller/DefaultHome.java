package com.example.portfolio.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class DefaultHome {

    @GetMapping("/")
    public String home() {
        return "Welcome to the Portfolio Tracker!";
    }
}