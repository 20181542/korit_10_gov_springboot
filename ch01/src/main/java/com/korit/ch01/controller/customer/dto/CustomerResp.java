package com.korit.ch01.controller.customer.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Schema (
        name = "CustomerResp",
        description = "사용자 정보 관련 API에서 공통적으로 사용하는 응답 모델입니다."
)
public record CustomerResp(
   @Schema(
           example = "1",
           description = """
           사용자 고유 번호(PK)
           """
   )
   int customerId,

   @Schema(
           example = "김준일",
           description = """
                   고객 이름
                   """
   )
   String name,
   @Schema(
           example = "+821011112222",
           description = """
                   사용자 연락처 (E.164 국제 표준)
                   """
   )
   String phoneE164,

   @Schema(
           description = """
                   정보 등록 일시
                   """
   )
   LocalDateTime createdAt,

   @Schema(
           description = """
                   정보 수정 일시
                   """
   )
   LocalDateTime updateAt

) {}
