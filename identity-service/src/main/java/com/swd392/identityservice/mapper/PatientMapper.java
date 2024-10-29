package com.swd392.identityservice.mapper;

import com.swd392.identityservice.dto.request.PatientCreationRequest;
import com.swd392.identityservice.dto.request.UserUpdateRequest;
import com.swd392.identityservice.dto.response.UserResponse;
import com.swd392.identityservice.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.swd392.identityservice.dto.response.PatientRespone;
import com.swd392.identityservice.entity.Patient;
@Mapper(componentModel = "spring")
public interface PatientMapper {
    Patient toPatient(PatientCreationRequest request);

    PatientRespone toPatientRespone(Patient patient);
}
