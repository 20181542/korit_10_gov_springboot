package com.korit.ch02.ex.ex05.controller;

import com.korit.ch02.ex.ex05.dto.BookDto;
import com.korit.ch02.ex.ex05.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public ResponseEntity<List<BookDto>> getAll() {
        return ResponseEntity.ok(List.of());
    }
    @GetMapping
    public ResponseEntity<?> getOne() {
        return ResponseEntity.ok(null);
    }
    @PostMapping
    public ResponseEntity<?> postBook() {
        return ResponseEntity.ok(null);
    }

}
