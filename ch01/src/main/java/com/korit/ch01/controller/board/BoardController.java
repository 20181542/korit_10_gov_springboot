package com.korit.ch01.controller.board;

import com.korit.ch01.controller.board.dto.BoardCreate;
import com.korit.ch01.controller.board.dto.BoardReqList;
import com.korit.ch01.controller.board.dto.BoardReqUpdate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/borad")
@CrossOrigin
public class BoardController {

    @PostMapping("/{userId}")
    public ResponseEntity<?> createBoard(@RequestBody BoardCreate dto) {
        System.out.println(dto);
        return ResponseEntity.ok(null);
    }
    @GetMapping
    public ResponseEntity<List<BoardReqList>> listByBoard(BoardReqList dto) {
        System.out.println(dto);
        return ResponseEntity.ok(null);
    }
    @GetMapping("/{userId}")
    public ResponseEntity<?> getBoard(@PathVariable int boardId) {
        System.out.println(boardId);
        return ResponseEntity.ok(null);
    }
    @PutMapping("/{userId}/{boardId}")
    public ResponseEntity<?> putBoard(@RequestBody BoardReqUpdate dto) {
        System.out.println(dto);
        return ResponseEntity.ok(null);
    }
}
