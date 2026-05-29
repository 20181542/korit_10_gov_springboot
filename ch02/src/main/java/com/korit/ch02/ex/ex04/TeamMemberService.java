package com.korit.ch02.ex.ex04;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TeamMemberService {
    private final MemberService memberService;
    private final TeamService teamService;
}
