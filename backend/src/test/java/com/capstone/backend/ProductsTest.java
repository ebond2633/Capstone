package com.capstone.backend;

import com.capstone.backend.model.Products;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ProductsTest {

    private Products product;

    @BeforeEach
    public void setUp() {
        product = new Products();
    }

    @Test
    public void testProductID() {
        // Assuming there's a setter for productID
        product.setProductID(1);
        assertEquals(1, product.getProductID());
    }
}