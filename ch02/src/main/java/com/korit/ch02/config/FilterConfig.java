package com.korit.ch02.config;

import com.korit.ch02.filter.MyFilter;
import com.korit.ch02.filter.TestFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<TestFilter> testFilter() {
        FilterRegistrationBean<TestFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new TestFilter());
        registrationBean.addUrlPatterns("/api/*");
        registrationBean.setOrder(1);
        return registrationBean;
    }
    @Bean
    public FilterRegistrationBean<MyFilter> testMyFilter() {
        FilterRegistrationBean<MyFilter> myRegistrationBean = new FilterRegistrationBean<>();
        myRegistrationBean.setFilter(new MyFilter());
        myRegistrationBean.addUrlPatterns("/api/*");
        myRegistrationBean.setOrder(1);
        return myRegistrationBean;
    }
}
