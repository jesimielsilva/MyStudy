package com.github.jesimielsilva.controllers;

import com.github.jesimielsilva.dtos.AuthDto;
import com.github.jesimielsilva.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AuthService authService;

//    @PostMapping
//    @ResponseStatus(HttpStatus.OK)
//    public String auth(@RequestBody AuthDto authDto) {
//
//        var userAuthenticationToken = new UsernamePasswordAuthenticationToken(authDto.login(), authDto.password());
//
//        authenticationManager.authenticate(userAuthenticationToken);
//
//        return authService.token(authDto);
//    }

//    @PostMapping
//    @ResponseStatus(HttpStatus.OK)
//    public ResponseEntity<String> auth(@RequestBody AuthDto authDto) {
//        var userAuthenticationToken = new UsernamePasswordAuthenticationToken(authDto.login(), authDto.password());
//        authenticationManager.authenticate(userAuthenticationToken);
//        String token = authService.token(authDto); // Gera o token JWT
//        return ResponseEntity.ok(token); // Retorna o token JWT
//    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Map<String, String>> auth(@RequestBody AuthDto authDto) {
        var userAuthenticationToken = new UsernamePasswordAuthenticationToken(authDto.login(), authDto.password());
        authenticationManager.authenticate(userAuthenticationToken);

        String token = authService.token(authDto); // Gera o token JWT
        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        return ResponseEntity.ok(response); // Retorna {"token": "jwt-token-aqui"}
    }

}
