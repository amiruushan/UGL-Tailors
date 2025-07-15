package com.ugl_clothings.ugl_backend.controller;

import com.ugl_clothings.ugl_backend.dto.ProductsDTO;
import com.ugl_clothings.ugl_backend.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @PostMapping("/add-new")
    public ProductsDTO addProduct(@RequestBody ProductsDTO productsDTO) {
        System.out.println("test");
        ProductsDTO savedProduct =  productsService.createProduct(productsDTO);
        return savedProduct;
    }

    // Create a new product
//    @PostMapping("/add-new")
//    public ResponseEntity<ProductsDTO> addProduct(@RequestBody ProductsDTO productsDTO) {
//        ProductsDTO savedProduct = productsService.createProduct(productsDTO);
//        return ResponseEntity.ok(savedProduct);
//    }

    // Update product quantity
    @PutMapping("/{id}/quantity")
    public ResponseEntity<ProductsDTO> updateProductQuantity(@PathVariable Long id, @RequestBody ProductsDTO productsDTO) {
        ProductsDTO updatedProduct = productsService.updateProductQuantity(id, productsDTO.getQuantity());
        return ResponseEntity.ok(updatedProduct);
    }

    // Delete a product by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productsService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    // Get all products (optional, for frontend integration)
    @GetMapping
    public ResponseEntity<List<ProductsDTO>> getAllProducts() {
        List<ProductsDTO> products = productsService.getAllProducts();
        return ResponseEntity.ok(products);
    }


}
