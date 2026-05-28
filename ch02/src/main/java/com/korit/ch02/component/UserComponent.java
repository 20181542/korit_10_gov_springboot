package com.korit.ch02.component;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component //bean 으로 만든는 첫번째 방법  component = bean
@AllArgsConstructor
public class UserComponent {
    private final UserUtilComponent userUtilComponent;

    public void printUser() {
        System.out.println("사용자 정보 출력");
        userUtilComponent.print();
    }


}
