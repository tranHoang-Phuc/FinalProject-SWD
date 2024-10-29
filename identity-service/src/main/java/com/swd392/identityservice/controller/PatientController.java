package com.swd392.identityservice.controller;

import com.swd392.identityservice.dto.ApiResponse;
import com.swd392.identityservice.dto.request.PatientCreationRequest;
import com.swd392.identityservice.dto.request.UserCreationRequest;
import com.swd392.identityservice.dto.response.PatientRespone;
import com.swd392.identityservice.service.PatientService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patients")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class PatientController {
    PatientService patientService;

    @PostMapping
    ApiResponse<PatientRespone> createPatient(@RequestBody @Valid PatientCreationRequest request)
    {
        return ApiResponse.<PatientRespone>builder()
                .result(patientService.createPatient(request))
                .build();
    }
}
