package com.korit.ch03.common.exception;


import com.korit.ch03.common.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice //bean 안에서 예외가 터질때만 가능
public class GlobalExceptionHandler {


        @ExceptionHandler(DuplicatedException.class)
        public ResponseEntity<ApiResponse> duplicated(DuplicatedException e) {
            return ResponseEntity.badRequest().body(ApiResponse.fail(e));
        }
}
