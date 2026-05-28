package com.korit.ch02.ex.ex05.dto;

import lombok.Data;

@Data
public class BookDto {
    private Long id;
    private String title;
    private String author;
    private int price;
}
