package com.example.demo.services;

import com.example.demo.entities.Balance;
import com.example.demo.repositories.BalanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class BalanceService {

    @Autowired
    private BalanceRepository balanceRepository;

    public Balance getBalance(Long userId) {
        return balanceRepository.findByUserId(userId)
                .orElse(new Balance());  // Return empty Balance if not found
    }

    public Balance updateBalance(Long userId, BigDecimal amount) {
        Balance balance = balanceRepository.findByUserId(userId)
                .orElseGet(() -> {  
                    Balance newBalance = new Balance();
                    newBalance.setUserId(userId);
                    return newBalance;
                });

        balance.setAmount(amount);
        balance.setLastUpdated(LocalDateTime.now());

        return balanceRepository.save(balance);
    }
}
