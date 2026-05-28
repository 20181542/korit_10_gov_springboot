package com.korit.ch02.ex.ex02;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

// 이 서비스에 MessageSender를 주입해야 합니다
@Component
@RequiredArgsConstructor
public class NotificationService {

    private final MessageSender messageSender;

    public void sendNotification(String to, String message) {
        messageSender.send(to, message);
    }
    // 생성자 직접 작성
}
