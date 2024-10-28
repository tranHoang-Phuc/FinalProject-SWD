package com.swd392.identityservice.mapper;

import com.swd392.identityservice.dto.request.UserCreationRequest;
import com.swd392.identityservice.dto.request.UserUpdateRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.swd392.identityservice.dto.response.UserResponse;
import com.swd392.identityservice.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);

    UserResponse toUserResponse(User user);

    @Mapping(target = "roles", ignore = true)
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
