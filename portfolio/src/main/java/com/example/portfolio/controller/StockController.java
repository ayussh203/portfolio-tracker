package com.example.portfolio.controller;

import com.example.portfolio.model.Stock;
import com.example.portfolio.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "*")
public class StockController {

    @Autowired
    private StockService stockService;

    private final WebClient webClient = WebClient.create();

    private static final String API_URL = "https://finnhub.io/api/v1/quote?symbol={symbol}&token={apiKey}";
    private static final String API_KEY = "";

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Stock addStock(@RequestBody Stock stock) {
        return stockService.addStock(stock);
    }

    @PutMapping("/{id}")
    public Stock updateStock(@PathVariable Long id, @RequestBody Stock updatedStock) {
        return stockService.updateStock(id, updatedStock);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
    }

    @GetMapping
    public List<Stock> getAllStocks() {

        return stockService.getAllStocks();
    }

    @GetMapping("/portfolio-value")
    public Mono<Map<String, Object>> getPortfolioValue() {
        List<Stock> stocks = stockService.getAllStocks();

        List<Mono<Double>> priceCalls = stocks.stream()
                .map(stock -> webClient.get()
                        .uri(API_URL, stock.getTicker(), API_KEY)
                        .retrieve()
                        .bodyToMono(Map.class)
                        .map(response -> {

                            Object currentPrice = response.get("c");

                            double price = currentPrice != null ? Double.parseDouble(currentPrice.toString()) : 0.0;
                            return price;
                        })
                        .onErrorReturn(0.0))
                .collect(Collectors.toList());

        return Mono.zip(priceCalls, prices -> {
            double totalValue = 0.0;
            for (int i = 0; i < stocks.size(); i++) {
                double price = (double) prices[i];

                totalValue += price * stocks.get(i).getQuantity();
            }

            double highestBuyPrice = stocks.stream()
                    .mapToDouble(Stock::getBuyPrice)
                    .max()
                    .orElse(0.0);

            return Map.of(
                    "totalValue", totalValue,
                    "highestBuyPrice", highestBuyPrice,
                    "stockCount", stocks.size());
        });
    }
}
