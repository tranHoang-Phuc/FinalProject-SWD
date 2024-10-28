package com.swd392.identityservice.mapper;

import com.swd392.identityservice.dto.request.PermissionRequest;
import org.mapstruct.Mapper;

import com.swd392.identityservice.dto.response.PermissionResponse;
import com.swd392.identityservice.entity.Permission;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest request);

    PermissionResponse toPermissionResponse(Permission permission);
}
