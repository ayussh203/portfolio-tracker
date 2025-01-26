package com.example.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "stocks")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stockName;
    private String ticker;
    private Integer quantity;
    private Double buyPrice;

    public Stock() {
    }

    public Stock(String stockName, String ticker, Integer quantity, Double buyPrice) {
        this.stockName = stockName;
        this.ticker = ticker;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public String getStockName() {
        return stockName;
    }

    public String getTicker() {
        return ticker;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Double getBuyPrice() {
        return buyPrice;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setBuyPrice(Double buyPrice) {
        this.buyPrice = buyPrice;
    }
}
