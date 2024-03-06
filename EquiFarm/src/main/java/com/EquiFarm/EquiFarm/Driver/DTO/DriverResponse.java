package com.EquiFarm.EquiFarm.Driver.DTO;

import java.time.LocalDateTime;
import java.util.List;

import com.EquiFarm.EquiFarm.Driver.ModeOfTransport;
import com.EquiFarm.EquiFarm.Farmer.DTO.UserResponse;
import com.EquiFarm.EquiFarm.ValueChain.DTO.ValueChainResponse;
import com.EquiFarm.EquiFarm.utils.Gender;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DriverResponse {
    private Long id;
    private UserResponse user;
    private Double latitude;
    private Double longitude;
    private Gender gender;
    private ModeOfTransport modeOfTransport;
    private boolean isAvailable;
    private String numberPlate;
    private String idNumber;
    private String vehicleImage;
    private String licenceNumber;
    private String bio;
    private String driverCode;
    private Double averageRating;
    private String profilePicture;
    private Boolean isVerified;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<ValueChainResponse> valueChains;
}
