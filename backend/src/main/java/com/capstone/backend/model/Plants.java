package com.capstone.backend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name="plants")
public class Plants {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer price;
    private String name;
    private String description;
    private String  image_url;
}
