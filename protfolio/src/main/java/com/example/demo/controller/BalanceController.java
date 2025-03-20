package com.example.demo.controller;

import com.example.demo.entities.Balance;
import com.example.demo.services.BalanceService;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/balance")
@CrossOrigin(origins = "http://localhost:3000")
public class BalanceController {
    private final BalanceService balanceService;

    public BalanceController(BalanceService balanceService) {
        this.balanceService = balanceService;
    }

    @GetMapping("/{userId}")
    public Balance getBalance(@PathVariable Long userId) {
        return balanceService.getBalance(userId);
    }

    @PostMapping("/update")
    public Balance updateBalance(@RequestBody Balance balance) {
        return balanceService.updateBalance(balance.getUserId(), balance.getAmount());
    }
}
