package com.swd392.identityservice.dto.response;

import java.time.LocalDate;
import java.util.Set;

import com.swd392.identityservice.validator.DobConstraint;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PatientRespone {
    String name;
    boolean gender;
    LocalDate dob;
    String healthCode;
    String address;
    String phoneNumber;
}
