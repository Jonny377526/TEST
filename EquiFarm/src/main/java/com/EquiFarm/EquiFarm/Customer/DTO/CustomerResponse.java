package com.EquiFarm.EquiFarm.Customer.DTO;

import java.time.LocalDateTime;

import com.EquiFarm.EquiFarm.Farmer.DTO.UserResponse;
import com.EquiFarm.EquiFarm.utils.Gender;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerResponse {
    private Long id;
    private UserResponse user;
    private String idNumber;
    private Gender gender;
    private String bio;
    private Double longitude;
    private Double latitude;
    private String profilePicture;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
