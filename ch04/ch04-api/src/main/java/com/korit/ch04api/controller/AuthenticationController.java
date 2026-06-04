package com.korit.ch04api.controller;

import com.korit.ch04api.dto.ApiResponse;
import com.korit.ch04api.dto.AuthUserCreateRequest;
import com.korit.ch04api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/auth")
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {
    private final UserService userService;

    @PostMapping("/users")
    public ResponseEntity<ApiResponse> signUp(@RequestBody AuthUserCreateRequest dto) {
        userService.authCreate(dto);
        return ResponseEntity.ok(ApiResponse.success());
    }

}
