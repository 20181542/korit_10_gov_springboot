package com.korit.ch02.filter;

import jakarta.servlet.*;

import java.io.IOException;

public class TestFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("전처리");
        chain.doFilter(request, response);
        System.out.println("후처리");
    }
}
