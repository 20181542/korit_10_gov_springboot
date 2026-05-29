package com.korit.ch02.ex.ex04;

import com.korit.ch02.ex.ex01.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    public List<Member> getTeamMembers(Long teamId) {
        return findByTeamId(teamId);
    }

    public List<Member> findByTeamId(Long teamId) {
        // 구현 생략
        return List.of();
    }
}
