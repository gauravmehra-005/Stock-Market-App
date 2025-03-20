
package com.example.demo.entities;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "watchlist")
public class Watchlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String stockSymbol;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    
    
    
    
    public Watchlist() {}
	public Watchlist(Long id, Long userId, String stockSymbol, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.userId = userId;
		this.stockSymbol = stockSymbol;
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getStockSymbol() {
		return stockSymbol;
	}

	public void setStockSymbol(String stockSymbol) {
		this.stockSymbol = stockSymbol;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
    
}
