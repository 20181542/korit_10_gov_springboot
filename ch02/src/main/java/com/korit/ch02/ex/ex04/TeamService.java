//package com.korit.ch02.ex.ex04;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//public class TeamService {
//
//    private final MemberService memberService;
//
//    public List<Member> getTeamMembers(Long teamId) {
//        return memberService.findByTeamId(teamId);
//    }
//}
//
//@Service
//@RequiredArgsConstructor
//public class MemberService {
//
//    private final TeamService teamService;
//
//    public Team getTeamOfMember(Long memberId) {
//        return teamService.findTeamByMemberId(memberId);
//    }
//
//    public List<Member> findByTeamId(Long teamId) {
//        // 구현 생략
//        return List.of();
//    }
//}
