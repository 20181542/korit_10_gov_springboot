package com.korit.ch01.controller.user;


import com.korit.ch01.controller.user.dto.UserReqList;
import com.korit.ch01.controller.user.dto.UserReqCreate;
import com.korit.ch01.controller.user.dto.UserReqUpdate;
import com.korit.ch01.controller.user.dto.UserResp;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

// 컨트롤러 클래스명 컨벤션(규칙)
// 도메인(명사) + Controller  도메인=특정대상, 분야
@RestController //데이터 응답만 하기위해 RestController 사용
@RequestMapping("/api/users") //복수형으로 해야함  //과거에는 ("post","/api/test") 이렇게 사용함  //앞에 api 가 오는것은 backend에 보내는 약속
@CrossOrigin // 요청은 들어올수 있고 응답은 조건을 확인해서 응답을 할수도 있고 없을수 도 있다 (문지기)
@Tag(name = "User", description = "사용자 정보 등록/조회/수정/삭제 가능 정의")
public class UserController {

    /**
     *  CRUD 만들기
     *  1. Create(POST) 생성
     *  POST요청으로 받을 수 있는 데이터 형식
     *  - JSON - application/json
     *  - FORM-DATA (file데이터  파일전송) - multipart/formdata
     */

    /**
     *  [ user 정보 추가]
     *  path: /api/users
     */
    @Operation(
            summary = "사용자 정보 등록",
            description = """
                    사용자의 프로필 정보를 등록 합니다.<br>
                    - username은 중복일 수 없습니다.
                    - username, password, email은 정규 표현식을 지켜야 합니다.
                    - 생성즉시 password를 제외하고 사용자 고유번호를 포함한 사용자 정보를 반환 합니다.
                    """
    )
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "고객 정보 등록 성공",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserResp.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
            content = @Content(mediaType =  "application/json", examples = {
                    @ExampleObject(
                            name = "필수 입력 값 누락",
                            value = """
                                    {
                                    "status" : 400,
                                    "error" : "Bad Request",
                                    "message" : "필수 입력 값 누락: name",
                                    "path" : "/api/users"
                                    }"""
                    ),
                    @ExampleObject(
                            name = "이미 존재하는 사용자 이름 사용",
                            value = """
                                    {
                                    "status" : 400,
                                    "error" : "Bad Request",
                                    "message" : "이미 존재하는 사용자이름을 입력 하셨습니다. username = testuser1234",
                                    "path" : "/api/users"
                                    }"""
                    )
            }))
    })
    @PostMapping
    public ResponseEntity<UserResp> create(@RequestBody UserReqCreate dto) {

        return ResponseEntity.ok(new UserResp(1, "test1234", "test@gmail.com", LocalDateTime.now(), LocalDateTime.now()));
    }
    /**
     *  [ user 프로필 사진 추가]
     *  path: /api/users
     */
    @PostMapping(value = "/{userId}/images", consumes = MediaType.MULTIPART_FORM_DATA_VALUE) //{userId} = 변수, 위에 RequestMapping("/api/users")를 작성했기 때문에 ("/api/users/{userId}/images") 가 아닌 ("{userId}/images) 작성
    public ResponseEntity<?> createImages(@PathVariable int userId, @RequestPart MultipartFile file) { //파일은 MultipartFile 객체로 받음
        return ResponseEntity.ok(null);
    }

    /**
     * 2. Read(Get) 조회
     * Get요청으로 받을 수 있는 데이터 형식
     * - parameter ->   url뒤에 ? 로 시작되어지는 key, Value들을 의미
     */
    /**
     * http://localhost:8080/api/users?username=test1234&email=test@gmail.com
     *
     * @return 모든 user에 대한 다건조회
     */
    @GetMapping
    public ResponseEntity<List<UserResp>> list(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String email) {
        System.out.println(query);
        System.out.println(username);
        System.out.println(email);
        return ResponseEntity.ok(List.of());
    }
    @GetMapping("/dto")
    public ResponseEntity<List<UserResp>> listByDto(UserReqList dto) {
        System.out.println(dto.getQuery());
        System.out.println(dto.getUsername());
        System.out.println(dto.getEmail());
        return ResponseEntity.ok(List.of());
    }


    /**
     * @return 특정 userId에 대한 단건조회
     */
    @GetMapping("/{userId}")
    public ResponseEntity<UserResp> getOne(@PathVariable int userId) {
        System.out.println(userId);
        return ResponseEntity.ok(null);
    }

    /**
     * 3. Update(Put, Patch) 수정
     * Put, Patch 요청으로 받을 수 있는 데이터 형식
     * - JSON -> application/json
     */
    // update => 전체수정(null 값이 들어온 필드에 null (빈)값으로 채움)
    @PutMapping("/{userId}")
    public ResponseEntity<UserResp> update(@RequestBody UserReqUpdate dto) {
        System.out.println(dto);
        return ResponseEntity.ok(null);
    }
    //modify => 부분 수정(null 값이 들어온 필드는 수정하지 않음)
    @PatchMapping("/{userId}")
    public ResponseEntity<UserResp> modify(@RequestBody UserReqUpdate dto) {
        System.out.println(dto);
        return ResponseEntity.ok(null);
    }


}
