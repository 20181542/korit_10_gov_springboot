package com.korit.ch02.ex.ex02;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public EmailSender emailSender() {
        return new EmailSender();
    }

    @Bean
    public SmsSender smsSender() {
        return new SmsSender();
    }


    @Bean
    public MessageSender messageSender() {
        return new EmailSender();
    }

    @Bean
    public NotificationService notificationService() {
        return new NotificationService(messageSender());
    }
}
