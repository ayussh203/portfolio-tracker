package com.example.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class FinnhubConfig {
    
    @Value("${finnhub.api.key}")
    private String apiKey;
    
    @Bean
    public WebClient finnhubClient() {
        return WebClient.builder()
            .baseUrl("https://finnhub.io/api/v1")
            .defaultHeader("X-Finnhub-Token", apiKey)
            .build();
    }
}