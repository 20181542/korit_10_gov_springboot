package com.korit.ch01.controller.customer;

import com.korit.ch01.controller.customer.dto.CustomerReqCreate;
import com.korit.ch01.controller.customer.dto.CustomerReqList;
import com.korit.ch01.controller.customer.dto.CustomerReqUpdate;
import com.korit.ch01.controller.customer.dto.CustomerResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin
public class CustomerController {

    @PostMapping
    public ResponseEntity<CustomerResp> create(@RequestBody CustomerReqCreate dto) {

        return ResponseEntity.ok(new CustomerResp(1, "김준일", "+8210-1111-2222", LocalDateTime.now(), LocalDateTime.now()));
    }
    //dto


    @GetMapping("/{cutomerId}")
    public ResponseEntity<List<CustomerResp>> listByDto(CustomerReqList dto) {
        return ResponseEntity.ok(null);
    }

    @GetMapping
    public ResponseEntity<CustomerResp>  getOne(@PathVariable int customerId) {
        return ResponseEntity.ok(null);
    }

    @PutMapping("/{cutomerId}")
    public ResponseEntity<CustomerResp> update(@RequestBody CustomerReqUpdate dto) {
        return ResponseEntity.ok(null);
    }

    @PatchMapping("/{cutomerId}")
    public ResponseEntity<CustomerResp> modify(@RequestBody CustomerReqUpdate dto) {
        return ResponseEntity.ok(null);
    }

}
