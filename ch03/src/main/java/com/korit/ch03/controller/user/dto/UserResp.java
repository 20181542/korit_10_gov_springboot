package com.korit.ch03.controller.user.dto;

import com.korit.ch03.controller.roles.dto.RoleResp;
import com.korit.ch03.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResp {
    private Long id;
    private String username;
    private String name;
    private String email;
    private List<Role> roles;

    @Data
    @AllArgsConstructor
    public static class Role {
        private Long roleId;
        private String roleName;
    }
}
