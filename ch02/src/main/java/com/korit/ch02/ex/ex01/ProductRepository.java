package com.korit.ch02.ex.ex01;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class ProductRepository {
    public Optional<Product> findById(Long id) {
        return Optional.ofNullable(null);
    }
}
