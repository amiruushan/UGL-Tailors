package com.ugl_clothings.ugl_backend.repository;

import com.ugl_clothings.ugl_backend.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {
}
