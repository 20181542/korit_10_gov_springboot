package com.korit.ch02.ex.ex05.service;

import com.korit.ch02.ex.ex05.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;
}
