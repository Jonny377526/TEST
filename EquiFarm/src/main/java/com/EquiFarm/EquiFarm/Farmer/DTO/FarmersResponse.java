package com.EquiFarm.EquiFarm.Farmer.DTO;

import java.time.LocalDateTime;
import java.util.List;

import com.EquiFarm.EquiFarm.Farmer.TypeOfFarming;
import com.EquiFarm.EquiFarm.ValueChain.DTO.ValueChainResponse;
import com.EquiFarm.EquiFarm.user.User;
import com.EquiFarm.EquiFarm.utils.Gender;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FarmersResponse {
    private Long id;
    private UserResponse user;
    private String idNumber;
    private TypeOfFarming typeOfFarming;
    private Double latitude;
    private Double longitude;
    private Gender gender;
    private String bio;
    private  String farmerCode;
    private String profilePicture;
    private Double averageRating;
    private List<ValueChainResponse> valueChains;
    private Boolean isVerified;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}


