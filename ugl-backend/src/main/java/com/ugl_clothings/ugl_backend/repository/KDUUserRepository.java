package com.ugl_clothings.ugl_backend.repository;

import com.ugl_clothings.ugl_backend.entity.KDUUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KDUUserRepository extends JpaRepository<KDUUser, Long> {
    boolean existsByStudentId(String studentId);
}