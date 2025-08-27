package com.example.portfolio.DTO;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MarketStatus {
    private String exchange;
    private boolean isOpen;
}
