package com.ugl_clothings.ugl_backend.service;

import com.ugl_clothings.ugl_backend.dto.ProductsDTO;
import com.ugl_clothings.ugl_backend.entity.Products;
import com.ugl_clothings.ugl_backend.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    // Create a new product
    public ProductsDTO createProduct(ProductsDTO productsDTO) {
        // Check if product with the same name already exists
//        Optional<Products> existingProduct = productsRepository.findByProductName(productsDTO.getProductName());
//        if (existingProduct.isPresent()) {
//            throw new IllegalArgumentException("Product with name '" + productsDTO.getProductName() + "' already exists.");
//        }

        Products product = new Products();
        product.setProductId((long) productsDTO.getProductId());
        product.setProductName(productsDTO.getProductName());
        product.setProductDescription(productsDTO.getProductDescription());
        product.setProductImage(productsDTO.getProductImage());
        product.setProductPrice(productsDTO.getProductPrice());
        product.setProductType(productsDTO.getProductType());
        product.setQuantity(productsDTO.getQuantity());

        Products savedProduct = productsRepository.save(product);
        return mapToDTO(savedProduct);
    }

    // Delete a product by ID
    public void deleteProduct(Long productId) {
        if (!productsRepository.existsById(productId)) {
            throw new EntityNotFoundException("Product with ID " + productId + " not found.");
        }
        productsRepository.deleteById(productId);
    }

    // Update product quantity
    public ProductsDTO updateProductQuantity(Long productId, Integer newQuantity) {
        Products product = productsRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product with ID " + productId + " not found."));

        if (newQuantity < 0) {
            throw new IllegalArgumentException("Quantity cannot be negative.");
        }

        product.setQuantity(newQuantity);
        Products updatedProduct = productsRepository.save(product);
        return mapToDTO(updatedProduct);
    }

    // Get all products
    public List<ProductsDTO> getAllProducts() {
        return productsRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    // Helper method to map Products entity to ProductsDTO
    private ProductsDTO mapToDTO(Products product) {
        ProductsDTO productsDTO = new ProductsDTO();
        productsDTO.setProductId(product.getProductId().intValue());
        productsDTO.setProductName(product.getProductName());
        productsDTO.setProductDescription(product.getProductDescription());
        productsDTO.setProductImage(product.getProductImage());
        productsDTO.setProductPrice(product.getProductPrice());
        productsDTO.setProductType(product.getProductType());
        productsDTO.setQuantity(product.getQuantity());
        return productsDTO;
    }
}