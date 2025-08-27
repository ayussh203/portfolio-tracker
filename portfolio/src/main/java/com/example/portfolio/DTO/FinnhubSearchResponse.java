package com.example.portfolio.DTO;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FinnhubSearchResponse {
    private int count;
    private List<StockSearchResult> result;

    @Getter
    @Setter
    public static class StockSearchResult {
        private String description;
        private String displaySymbol;
        private String symbol;
        private String type;

    }
}
