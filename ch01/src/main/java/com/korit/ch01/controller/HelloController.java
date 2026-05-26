package com.korit.ch01.controller;

import com.korit.ch01.Dto.UserDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;


@Controller
public class HelloController {

    @GetMapping("/api/hello")   //응답 화면(view) (응답을 화면으로 하겠다)
//    @ResponseBody               //응답 데이터 (응답을 데이터로 하겠다)
    public String hello() {
        return "/hello.html";
    }

    @GetMapping("/api/hello2")
    @ResponseBody
    public String hello2() {
        return "데이터 응답";
    }

    @GetMapping("/api/hello3")
    @ResponseBody
    public Map<String, Object> hello3() {
        return Map.of(
                "name", "김준일",
                "age", 33
        );
    }




    @GetMapping ("api/hello4")
    @ResponseBody
    public UserDto hello4(){
        return new UserDto("test", "1111" ,"김준일", "adsf@gmail.com");


    }
}
