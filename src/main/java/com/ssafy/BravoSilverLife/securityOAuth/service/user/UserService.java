package com.ssafy.BravoSilverLife.securityOAuth.service.user;

import java.util.Optional;

import com.ssafy.BravoSilverLife.securityOAuth.advice.assertThat.DefaultAssert;
import com.ssafy.BravoSilverLife.securityOAuth.config.security.token.UserPrincipal;
import com.ssafy.BravoSilverLife.securityOAuth.domain.entity.user.User;
import com.ssafy.BravoSilverLife.securityOAuth.payload.response.ApiResponse;
import com.ssafy.BravoSilverLife.securityOAuth.repository.user.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public ResponseEntity<?> readByUser(UserPrincipal userPrincipal){
        Optional<User> user = userRepository.findById(userPrincipal.getId());
        DefaultAssert.isOptionalPresent(user);
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(user.get()).build();
        return ResponseEntity.ok(apiResponse);
    }
}
