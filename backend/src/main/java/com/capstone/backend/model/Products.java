package com.capstone.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productID;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String origin;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false)
    private String img_url;

    @Column(nullable = false)
    private Double price;
}
