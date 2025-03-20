
package com.example.demo.controller;


import com.example.demo.entities.Holding;
import com.example.demo.services.HoldingService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/holdings")
@CrossOrigin(origins = "http://localhost:3000")
public class HoldingController {
    private final HoldingService holdingService;

    public HoldingController(HoldingService holdingService) {
        this.holdingService = holdingService;
    }

    @GetMapping("/{userId}")
    public List<Holding> getHoldings(@PathVariable Long userId) {
        return holdingService.getHoldings(userId);
    }

    @PostMapping("/add")
    public Holding addHolding(@RequestBody Holding holding) {
        return holdingService.addHolding(holding);
    }
}
