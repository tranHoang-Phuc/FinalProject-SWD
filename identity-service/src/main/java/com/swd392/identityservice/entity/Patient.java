package com.swd392.identityservice.entity;

import java.time.LocalDate;
import java.util.Set;

import jakarta.persistence.*;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    String name;
    boolean gender;
    LocalDate dob;
    String healthCode;
    String address;
    String phoneNumber;

}
