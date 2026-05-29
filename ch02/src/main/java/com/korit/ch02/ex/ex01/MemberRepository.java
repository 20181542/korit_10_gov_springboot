package com.korit.ch02.ex.ex01;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class MemberRepository {
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(null);
    }
}
