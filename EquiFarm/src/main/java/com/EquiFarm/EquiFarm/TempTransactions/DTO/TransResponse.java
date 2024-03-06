package com.EquiFarm.EquiFarm.TempTransactions.DTO;

import com.EquiFarm.EquiFarm.Farmer.DTO.UserResponse;
import com.EquiFarm.EquiFarm.TempTransactions.TempPatrans.TempPartTrans;
import com.EquiFarm.EquiFarm.TempTransactions.TransStatus;
import com.EquiFarm.EquiFarm.ValueChain.DTO.ValueChainResponse;
import com.EquiFarm.EquiFarm.ValueChain.ValueChain;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransResponse {
    private Long id;
    private String orderItemName;
    private Double totalAmount;
    private String transactionId;
    private Long buyerUserId;
    private Long productId;
    private Long sellerUserId;
    private String sellerName;
    private String buyerName;
    private LocalDateTime timeStamp;
    private TransStatus transStatus;
    private List<TempPartTrans> tempPartTrans;
}
