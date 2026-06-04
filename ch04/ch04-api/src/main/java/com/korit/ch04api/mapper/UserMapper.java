package com.korit.ch04api.mapper;

import com.korit.ch04api.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    int insert (User user);
    User selectById(Long id);
    User selectByUsername(String username);
}
