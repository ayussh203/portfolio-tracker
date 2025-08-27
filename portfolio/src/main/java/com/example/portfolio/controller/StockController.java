package com.example.portfolio.controller;

import com.example.portfolio.model.StockPrice;
import com.example.portfolio.model.User;
import com.example.portfolio.service.StockService;
import com.example.portfolio.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import com.example.portfolio.DTO.RegisterUser;
import com.example.portfolio.DTO.LoginUser;
import com.example.portfolio.DTO.FinnhubSearchResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @Autowired
    private UserService userService;

    private final WebClient webClient = WebClient.create();

    @GetMapping("/search")
    public FinnhubSearchResponse search(
            @RequestParam(name = "query") String query,
            @RequestParam(name = "exchange", defaultValue = "US") String exchange) {
        return stockService.searchStocks(query, exchange);
    }

}
