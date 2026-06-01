package com.korit.ch03.service;


import com.korit.ch03.common.exception.DuplicatedException;
import com.korit.ch03.controller.roles.dto.RoleReqCreate;
import com.korit.ch03.controller.roles.dto.RoleResp;
import com.korit.ch03.entity.Role;
import com.korit.ch03.mapper.RolesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RolesMapper rolesMapper;

    public void create(RoleReqCreate dto) {
        Role foundRole = rolesMapper.selectByUsername(dto.getRoleName());
        if (foundRole != null) {
            throw new DuplicatedException("roleName이 중복입니다.", "roleName", dto.getRoleName());
        }
        Role newrole = Role.builder()
                .roleName(dto.getRoleName())
                .build();

        rolesMapper.insert(newrole);

    }

    public List<RoleResp> getAll() {
        List<Role> roles = rolesMapper.selectAll();
        return roles.stream()
                .map(role -> RoleResp.builder()
                    .id(role.getId())
                    .roleName(role.getRoleName())
                    .createdAt(role.getCreatedAt())
                    .updatedAt(role.getUpdatedAt())
                    .build())
                .toList();

    }

    public RoleResp getOne(Long roleId) {
        Role role = rolesMapper.selectById(roleId);
        return RoleResp.builder()
                .id(role.getId())
                .roleName(role.getRoleName())
                .createdAt(role.getCreatedAt())
                .updatedAt(role.getUpdatedAt())
                .build();
    }



}
