
package com.example.demo.services;

import com.example.demo.entities.Watchlist;
import com.example.demo.repositories.WatchlistRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WatchlistService {
    private final WatchlistRepository watchlistRepository;

    public WatchlistService(WatchlistRepository watchlistRepository) {
        this.watchlistRepository = watchlistRepository;
    }

    public List<Watchlist> getWatchlist(Long userId) {
        return watchlistRepository.findByUserId(userId);
    }

    public Watchlist addStockToWatchlist(Watchlist watchlist) {
        return watchlistRepository.save(watchlist);
    }
}
