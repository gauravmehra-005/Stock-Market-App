package com.example.demo.services;


import com.example.demo.entities.Holding;
import com.example.demo.repositories.HoldingRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HoldingService {
    private final HoldingRepository holdingRepository;

    public HoldingService(HoldingRepository holdingRepository) {
        this.holdingRepository = holdingRepository;
    }

    public List<Holding> getHoldings(Long userId) {
        return holdingRepository.findByUserId(userId);
    }

    public Holding addHolding(Holding holding) {
        return holdingRepository.save(holding);
    }
}
