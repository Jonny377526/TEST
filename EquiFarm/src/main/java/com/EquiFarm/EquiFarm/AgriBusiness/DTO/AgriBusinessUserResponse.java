package com.EquiFarm.EquiFarm.AgriBusiness.DTO;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import com.EquiFarm.EquiFarm.AgriBusiness.TypeOfBusiness.DTO.TypeOfBusinessResponse;
import com.EquiFarm.EquiFarm.Farmer.DTO.UserResponse;
import com.EquiFarm.EquiFarm.ServiceProvider.DTO.CordinatesDTO;
import com.EquiFarm.EquiFarm.ServiceProvider.DTO.WorkingHoursDTO;
import com.EquiFarm.EquiFarm.ServiceProvider.TypeOfServices.DTO.TypeOfServiceResponse;
import com.EquiFarm.EquiFarm.ValueChain.DTO.ValueChainResponse;
import com.EquiFarm.EquiFarm.utils.Gender;

import jakarta.persistence.Embedded;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AgriBusinessUserResponse {
    private Long id;
    private UserResponse user;
    private String idNumber;
    private String bio;
    private Gender gender;
    private String businessName;
    private String businessEmail;
    private String businessDescription;
    private String businessPhone;
    private TypeOfBusinessResponse typeOfBusiness;
    private String licenseNumber;
    private String businessLogo;
    private String agribusinessCode;
    @Embedded
    private WorkingHoursDTO workingHours;
    private Set<DayOfWeek> workingDays;
    @Embedded
    private CordinatesDTO businessLocation;
    private Boolean businessVerified;
    private List<ValueChainResponse> valueChains;
    private String profilePicture;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
