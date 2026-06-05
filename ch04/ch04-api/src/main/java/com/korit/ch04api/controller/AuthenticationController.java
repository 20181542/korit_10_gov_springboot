package com.korit.ch04api.controller;

import com.korit.ch04api.dto.ApiResponse;
import com.korit.ch04api.dto.AuthUserCreateRequest;
import com.korit.ch04api.dto.AuthUserTokenRequest;
import com.korit.ch04api.dto.TokenResponse;
import com.korit.ch04api.service.AuthenticationService;
import com.korit.ch04api.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/auth")
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {
    private final UserService userService;
    private final AuthenticationService authenticationService;


    @PostMapping("/users")
    public ResponseEntity<ApiResponse> signUp(@Valid @RequestBody AuthUserCreateRequest dto) {
        return ResponseEntity.ok(ApiResponse.success(userService.authCreate(dto)));
    }

    @PostMapping("/users/token")
    public ResponseEntity<ApiResponse<TokenResponse>> signIn(@Valid @RequestBody AuthUserTokenRequest dto) {
        return ResponseEntity.ok(ApiResponse.success(authenticationService.authentication(dto)));
    }

}
