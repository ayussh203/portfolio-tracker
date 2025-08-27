package com.example.portfolio.service;

import com.example.portfolio.model.StockPrice;
import com.example.portfolio.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;

import com.example.portfolio.DTO.FinnhubSearchResponse;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;
    private static final String API_KEY = "d02v3r9r01qi6jgjh2e0d02v3r9r01qi6jgjh2eg";

    private final RestTemplate restTemplate;

    public StockService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public FinnhubSearchResponse searchStocks(String query, String exchange) {
        String url = "https://finnhub.io/api/v1/search?q=" + query +
                "&exchange=" + exchange +
                "&token=" + API_KEY;
        return restTemplate.getForObject(url, FinnhubSearchResponse.class);
    }
}
