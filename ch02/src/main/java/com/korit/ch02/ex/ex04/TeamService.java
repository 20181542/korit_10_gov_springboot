package com.korit.ch02.ex.ex04;

import com.korit.ch02.ex.ex01.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class TeamService {
    private final MemberService memberService;

    public Team getTeamOfMember(Long memberId) {
        return findTeamByMemberId(memberId);
    }

    private Team findTeamByMemberId(Long memberId) {
        return null;
    }


}
