package com.capstone.backend.common;

import com.capstone.backend.model.Plants;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantsRepository extends JpaRepository<Plants, String> {
    Plants findByPlantName(String plantName);
    Plants findByPlantId(String plantId);
    Plants findByPlantNameOrPlantId(String plantName, String plantId);
}
