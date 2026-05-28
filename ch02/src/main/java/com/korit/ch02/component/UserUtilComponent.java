package com.korit.ch02.component;

import org.springframework.stereotype.Component;

@Component
public class UserUtilComponent {

    public void print() {
        System.out.println("사용자 유틸 출력");
    }
}
