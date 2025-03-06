package com.example.portfolio.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class FinnhubQuote {
    @JsonProperty("c")
    private Double currentPrice;
    @JsonProperty("h")
    private Double highPrice;
    @JsonProperty("l")
    private Double lowPrice;
    @JsonProperty("o")
    private Double openPrice;
    @JsonProperty("pc")
    private Double previousClose;
}
