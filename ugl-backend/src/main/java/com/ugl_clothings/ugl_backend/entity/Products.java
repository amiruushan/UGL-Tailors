package com.ugl_clothings.ugl_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "products")
@Entity
public class Products {
    @Id
    public Long productId;

    @Column(length = 50, nullable = false, unique = true, name = "product_name")
    public String productName;

    @Column(length = 50, nullable = false, unique = true, name = "description")
    public String productDescription;

    @Column(length = 200, nullable = false, unique = false, name = "product_image")
    public String productImage;

    @Column(length = 50, nullable = false, unique = false, name = "price")
    public String productPrice;

    @Column(length = 50, nullable = false, unique = false, name = "type")
    public String productType;

    @Column(nullable = false, unique = false, name = "quantity")
    public Integer quantity;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(String productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
