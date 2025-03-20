
package com.example.demo.controller;

import com.example.demo.entities.Watchlist;
import com.example.demo.services.WatchlistService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/watchlist")
@CrossOrigin(origins = "http://localhost:3000")
public class WatchlistController {
    private final WatchlistService watchlistService;

    public WatchlistController(WatchlistService watchlistService) {
        this.watchlistService = watchlistService;
    }

    @GetMapping("/{userId}")
    public List<Watchlist> getWatchlist(@PathVariable Long userId) {
        return watchlistService.getWatchlist(userId);
    }

    @PostMapping("/add")
    public Watchlist addStock(@RequestBody Watchlist watchlist) {
        return watchlistService.addStockToWatchlist(watchlist);
    }
}
