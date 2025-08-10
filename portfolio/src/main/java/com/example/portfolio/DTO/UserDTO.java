package com.example.portfolio.DTO;
import lombok.Getter;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@Getter
public class UserDTO {
    private Long id;
    private String name;
    private String email;
}
