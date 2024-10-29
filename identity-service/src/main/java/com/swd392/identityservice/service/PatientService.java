package com.swd392.identityservice.service;

import com.swd392.identityservice.constant.PredefinedRole;
import com.swd392.identityservice.dto.request.PatientCreationRequest;
import com.swd392.identityservice.dto.response.PatientRespone;
import com.swd392.identityservice.dto.response.UserResponse;
import com.swd392.identityservice.entity.Patient;
import com.swd392.identityservice.entity.Role;
import com.swd392.identityservice.exception.AppException;
import com.swd392.identityservice.exception.ErrorCode;
import com.swd392.identityservice.mapper.PatientMapper;
import com.swd392.identityservice.repository.PatientRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashSet;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class PatientService {
    PatientRepository patientRepository;
    PatientMapper patientMapper;

    public PatientRespone createPatient(PatientCreationRequest request) {
        Patient patient = patientMapper.toPatient(request);

        return patientMapper.toPatientRespone(patientRepository.save(patient));
    }
}
