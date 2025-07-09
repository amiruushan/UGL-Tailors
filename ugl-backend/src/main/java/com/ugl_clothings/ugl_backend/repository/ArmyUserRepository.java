package com.ugl_clothings.ugl_backend.repository;

import com.ugl_clothings.ugl_backend.entity.ArmyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArmyUserRepository extends JpaRepository<ArmyUser, Long> {
    boolean existsByArmyId(String armyId);
}