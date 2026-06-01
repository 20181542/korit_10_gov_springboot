package com.korit.ch03.controller.roles;


import com.korit.ch03.common.dto.ApiResponse;
import com.korit.ch03.controller.roles.dto.RoleReqCreate;
import com.korit.ch03.controller.roles.dto.RoleResp;
import com.korit.ch03.entity.Role;
import com.korit.ch03.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/roles")
@RestController
@RequiredArgsConstructor
public class RolesController {
    private final RoleService roleService;

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody RoleReqCreate dto) {
        return ResponseEntity.ok(ApiResponse.ok());
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<RoleResp>>> getAll() {
        return ResponseEntity.ok(ApiResponse.ok(roleService.getAll()));
    }

    @GetMapping("/{roleId}")
    public ResponseEntity<?> getOne(@PathVariable Long roleId) {
        return ResponseEntity.ok(ApiResponse.ok(roleService.getOne(roleId)));
    }
}
