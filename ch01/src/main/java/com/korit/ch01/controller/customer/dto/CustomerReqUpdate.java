package com.korit.ch01.controller.customer.dto;

import lombok.Data;

@Data
public class CustomerReqUpdate {
    private String name;
    private String phoneE164;
    private String address;
}
