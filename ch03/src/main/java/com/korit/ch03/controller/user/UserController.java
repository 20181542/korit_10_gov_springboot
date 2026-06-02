package com.korit.ch03.controller.user;

import com.korit.ch03.common.dto.ApiResponse;
import com.korit.ch03.controller.user.dto.UserReqCreate;
import com.korit.ch03.controller.user.dto.UserResp;
import com.korit.ch03.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("/api/users")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ResponseEntity<ApiResponse<UserResp>> create(@RequestBody UserReqCreate dto) {
        UserResp userResp = userService.create(dto);

        return ResponseEntity.ok(ApiResponse.ok(userService.create(dto)));
    }

    //다건 조회 (전체 조회)
    @GetMapping
    public ResponseEntity<ApiResponse<List<UserResp>>> getAll() {
        return ResponseEntity.ok(ApiResponse.ok(userService.getAll()));
    }

    //단건
    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse<UserResp>> getOne(@PathVariable Long userId) {
        return ResponseEntity.ok(ApiResponse.ok(userService.getOne(userId)));
    }

}
