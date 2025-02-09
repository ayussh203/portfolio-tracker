package com.example.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "stocks")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String stockName;

    @Column(nullable = false)
    private String ticker;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Double buyPrice;

    public Stock() {
    }

    public Stock(String stockName, String ticker, Integer quantity, Double buyPrice) {
        this.stockName = stockName;
        this.ticker = ticker;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
    }

    // Getters and Setters
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
