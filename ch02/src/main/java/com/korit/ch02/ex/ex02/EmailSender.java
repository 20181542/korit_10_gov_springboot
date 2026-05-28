package com.korit.ch02.ex.ex02;

import org.springframework.stereotype.Service;

@Service
public class EmailSender implements MessageSender {
    @Override
    public void send(String to, String message) {
        System.out.println("[EMAIL] " + to + " : " + message);
    }
}
