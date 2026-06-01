package com.korit.ch03.mapper;

import com.korit.ch03.entity.Role;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RolesMapper {
    int insert (Role role);
    List<Role> selectAll();
    Role selectById(Long roleId);
    Role selectByUsername(String roleName);
}
