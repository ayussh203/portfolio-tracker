package com.example.portfolio.controller;

import com.example.portfolio.model.Stock;
import com.example.portfolio.service.StockService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

    private final StockService stockService;
    private final WebClient webClient;

    // Finnhub API configuration injected from properties
    @Value("${finnhub.api.url}")
    private String apiUrl;

    @Value("${finnhub.api.key}")
    private String apiKey;

    @Autowired
    public StockController(StockService stockService, WebClient.Builder webClientBuilder) {
        this.stockService = stockService;
        // Build the default WebClient instance
        this.webClient = webClientBuilder.build();
    }

    // Create a new stock entry
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Stock addStock(@Valid @RequestBody Stock stock) {
        return stockService.addStock(stock);
    }

    // Update an existing stock entry
    @PutMapping("/{id}")
    public Stock updateStock(@PathVariable Long id, @Valid @RequestBody Stock updatedStock) {
        return stockService.updateStock(id, updatedStock);
    }

    // Delete a stock entry
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
    }

    // Retrieve all stock entries
    @GetMapping
    public List<Stock> getAllStocks() {
        return stockService.getAllStocks();
    }

    // Retrieve portfolio metrics including real-time total portfolio value
    @GetMapping("/portfolio-value")
    public Mono<Map<String, Object>> getPortfolioValue() {
        List<Stock> stocks = stockService.getAllStocks();

        // For each stock, call the external Finnhub API to get the current price.
        List<Mono<Double>> priceCalls = stocks.stream()
                .map(stock -> webClient.get()
                        .uri(apiUrl, Map.of("ticker", stock.getTicker(), "token", apiKey))
                        .retrieve()
                        .bodyToMono(Map.class)
                        .map(response -> {
                            Object currentPrice = response.get("c");
                            double price = currentPrice != null ? Double.parseDouble(currentPrice.toString()) : 0.0;
                            return price;
                        })
                        .onErrorReturn(0.0)
                )
                .collect(Collectors.toList());

        // Zip all asynchronous calls and compute the total portfolio value
        return Mono.zip(priceCalls, prices -> {
            double totalValue = 0.0;
            for (int i = 0; i < stocks.size(); i++) {
                double price = (double) prices[i];
                totalValue += price * stocks.get(i).getQuantity();
            }

            // Example metric: highest buy price among stocks (could be used as a proxy metric)
            double highestBuyPrice = stocks.stream()
                    .mapToDouble(Stock::getBuyPrice)
                    .max()
                    .orElse(0.0);

            return Map.of(
                    "totalValue", totalValue,
                    "highestBuyPrice", highestBuyPrice,
                    "stockCount", stocks.size()
            );
        });
    }
}
