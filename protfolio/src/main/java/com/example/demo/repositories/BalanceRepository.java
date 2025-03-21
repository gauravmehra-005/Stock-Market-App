package com.example.demo.repositories;

import com.example.demo.entities.Balance;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BalanceRepository extends JpaRepository<Balance, Long> {
    Optional<Balance> findByUserId(Long userId);
}
