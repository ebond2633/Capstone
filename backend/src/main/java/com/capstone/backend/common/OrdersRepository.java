package com.capstone.backend.common;

import com.capstone.backend.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {
    Orders findByOrderId(Integer orderId);
    Orders findByOrderIdOrOrderId(Integer orderId, Integer orderId2);
}
