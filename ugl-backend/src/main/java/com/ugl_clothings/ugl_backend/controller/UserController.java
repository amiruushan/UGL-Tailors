package com.ugl_clothings.ugl_backend.controller;

import com.ugl_clothings.ugl_backend.dto.UserDTO;
import com.ugl_clothings.ugl_backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@Validated(UserDTO.Signup.class) @Valid @RequestBody UserDTO userDTO) {
        System.out.println("wada");
        return ResponseEntity.ok(userService.signup(userDTO));
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@Validated(UserDTO.Signin.class) @Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.signin(userDTO));
    }
}