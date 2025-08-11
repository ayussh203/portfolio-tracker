package com.example.portfolio.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "stocks")
@Getter
@Setter
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stockName;
    private String ticker;
    private Integer quantity;
    private Double buyPrice;

    public Stock(String stockName, String ticker, Integer quantity, Double buyPrice) {
        this.stockName = stockName;
        this.ticker = ticker;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
    }
}
