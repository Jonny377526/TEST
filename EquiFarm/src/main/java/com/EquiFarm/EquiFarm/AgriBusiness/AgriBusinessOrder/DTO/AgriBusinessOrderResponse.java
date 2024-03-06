package com.EquiFarm.EquiFarm.AgriBusiness.AgriBusinessOrder.DTO;

import com.EquiFarm.EquiFarm.AgriBusiness.AgriBusinessOrderItem.DTO.AgriBusinessOrderItemResponse;
import com.EquiFarm.EquiFarm.Farmer.DTO.UserResponse;
import com.EquiFarm.EquiFarm.Order.OrderStatus;
import com.EquiFarm.EquiFarm.OrderItem.DTO.OrderItemResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AgriBusinessOrderResponse {
    private Long id;
    private String orderId;
    private OrderStatus orderStatus;
    private Double totalAmount;
    private Boolean isPaid;
    private List<AgriBusinessOrderItemResponse> orderItems;
    private UserResponse user;
    private LocalDateTime orderDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}






