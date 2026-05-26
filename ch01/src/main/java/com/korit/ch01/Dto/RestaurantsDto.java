package com.korit.ch01.Dto;

public record RestaurantsDto(
        String restaurantName,
        String category,
        String address,
        double rating
) {

}
