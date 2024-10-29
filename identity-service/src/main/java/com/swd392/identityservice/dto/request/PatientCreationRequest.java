package com.swd392.identityservice.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Size;

import com.swd392.identityservice.validator.DobConstraint;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PatientCreationRequest {

    String name;

    boolean gender;
    @DobConstraint(min = 10, message = "INVALID_DOB")
    LocalDate dob;
    String healthCode;
    String address;
    String phoneNumber;
}
