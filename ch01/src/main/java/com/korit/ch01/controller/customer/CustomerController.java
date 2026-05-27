package com.korit.ch01.controller.customer;

import com.korit.ch01.controller.customer.dto.CustomerReqCreate;
import com.korit.ch01.controller.customer.dto.CustomerResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin
public class CustomerController {

    @PostMapping
    public ResponseEntity<CustomerResp> create(@RequestBody CustomerReqCreate dto) {

        return ResponseEntity.ok(new CustomerResp(1, "김준일", "+8210-1111-2222", LocalDateTime.now(), LocalDateTime.now()));
    }


}
