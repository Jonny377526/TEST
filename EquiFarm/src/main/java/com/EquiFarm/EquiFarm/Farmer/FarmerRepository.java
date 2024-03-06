package com.EquiFarm.EquiFarm.Farmer;

import java.util.List;
import java.util.Optional;

import com.EquiFarm.EquiFarm.Driver.DTO.DriverUserRequest;
import com.EquiFarm.EquiFarm.Driver.Driver;
import com.EquiFarm.EquiFarm.ValueChain.ValueChain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.EquiFarm.EquiFarm.user.User;

public interface FarmerRepository extends JpaRepository<Farmer,Long> {

    Optional<Farmer> findByDeletedFlagAndUserId(Character deleteFlag, Long userId);
    Optional<Farmer> findByDeletedFlagAndId(Character deleteFlag, Long id);
    List<Farmer> findByValueChainsContaining(ValueChain valueChain);
    List<Farmer> findByDeletedFlag(Character deleteFlag);
    Optional<Farmer> findByFarmerCode(String farmerCode);
    
    Optional<Farmer> findByIdNumber(String idNumber);
    Optional<Farmer> findFirstByOrderByFarmerCodeDesc();

    // @Query("SELECT f FROM Farmer f WHERE f.user.id = :userId")
    // Optional<Farmer> findByUserId(@Param("userId") Long userId);


}
