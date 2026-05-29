package com.korit.ch02.ex.ex02;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

// 이 서비스에 MessageSender를 주입해야 합니다

@RequiredArgsConstructor
public class NotificationService {

    private final MessageSender emailSender;

}
