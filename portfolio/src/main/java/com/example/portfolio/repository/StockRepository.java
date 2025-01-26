package com.example.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.portfolio.model.Stock;

public interface StockRepository extends JpaRepository<Stock, Long> {
}
