package com.korit.ch03.service;

import com.korit.ch03.common.exception.DuplicatedException;
import com.korit.ch03.controller.category.dto.CategoryReqCreate;
import com.korit.ch03.controller.category.dto.CategoryResp;
import com.korit.ch03.entity.Category;
import com.korit.ch03.mapper.CategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryMapper categoryMapper;

    public void create(CategoryReqCreate dto) {
        Category foundCategory = categoryMapper.selectByCategoryName(dto.getCategoryName());
        if (foundCategory != null){
            throw new DuplicatedException("categoryname이 중복 입니다.", "categoryName", dto.getCategoryName());
        }

        Category newCategory = Category.builder()
                .categoryName(dto.getCategoryName())
                .build();
        System.out.println(dto);
        categoryMapper.insert(newCategory);
    }

    public List<CategoryResp> getAll() {
        return categoryMapper.selectAll().stream()
                .map(category -> CategoryResp.builder()
                        .id(category.getId())
                        .categoryName(category.getCategoryName())
                        .createdAt(category.getCreatedAt())
                        .updateAt(category.getUpdateAt())
                        .build())
                .toList();
    }

    public CategoryResp getOne(Long categoryId) {
        Category foundCategory = categoryMapper.selectByCategoryId(categoryId);

        return CategoryResp.builder()
                .id(foundCategory.getId())
                .categoryName(foundCategory.getCategoryName())
                .createdAt(foundCategory.getCreatedAt())
                .updateAt(foundCategory.getUpdateAt())
                .build();
    }






}
