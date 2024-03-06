package com.EquiFarm.EquiFarm.AgriBusiness.AgriBusinessOrder;

import com.EquiFarm.EquiFarm.Order.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AgriBusinessOrderRepository extends JpaRepository<AgriBusinessOrder, Long> {
    Optional<AgriBusinessOrder> findByDeletedFlagAndId(Character deleteFlag, Long id);

    List<AgriBusinessOrder> findByDeletedFlagAndUserIdAndIsOrderedAndIsPaid(Character deleteFlag, Long userId, boolean isOrdered, boolean isPaid);

    List<AgriBusinessOrder> findByDeletedFlag(Character deleteFlag);

    List<AgriBusinessOrder> findByDeletedFlagAndUserId(Character deleteFlag, Long userId);

    Optional<AgriBusinessOrder> findByDeletedFlagAndIdAndUserIdAndOrderStatusAndIsOrderedAndIsPaid(Character deleteFlag, Long id, Long userId, OrderStatus orderStatus, boolean isOrdered, boolean isPaid);

}


