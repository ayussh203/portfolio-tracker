package com.example.portfolio.DTO;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockQuote {
    
    @com.fasterxml.jackson.annotation.JsonProperty("c")
    private double currentPrice;  

    @com.fasterxml.jackson.annotation.JsonProperty("h")
    private double highPrice;   

    @com.fasterxml.jackson.annotation.JsonProperty("l")
    private double lowPrice;  

    @com.fasterxml.jackson.annotation.JsonProperty("o")
    private double openPrice;  

    @com.fasterxml.jackson.annotation.JsonProperty("pc")
    private double previousClosePrice;  

    @com.fasterxml.jackson.annotation.JsonProperty("t")
    private long timestamp;     
}
