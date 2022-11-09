package com.ssafy.BravoSilverLife.service;

import com.ssafy.BravoSilverLife.config.JwtTokenProvider;
import com.ssafy.BravoSilverLife.dto.UserDto;
import com.ssafy.BravoSilverLife.entity.Bookmark;
import com.ssafy.BravoSilverLife.entity.PhoneAuth;
import com.ssafy.BravoSilverLife.entity.User;
import com.ssafy.BravoSilverLife.repository.BookmarkRepository;
import com.ssafy.BravoSilverLife.repository.PhoneAuthRepository;
import com.ssafy.BravoSilverLife.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    private final JwtTokenProvider jwtTokenProvider;

    private final PasswordEncoder passwordEncoder;

    private final PhoneAuthRepository phoneAuthRepository;

    private final BookmarkRepository bookmarkRepository;

    private final MMSService mmsService;

    public int changeNickname(String nickname, String newNickname) {
        User findByNickname = userRepository.findByNickname(nickname);
        findByNickname.changeNickname(newNickname);

        if (findByNickname.getNickname().equals(newNickname))
            return 1;
        return 0;
    }

    public int changePhoneNumber(String phoneNumber, String authNumber, String newPhoneNumber) {
        User user = userRepository.findByPhoneNumber(phoneNumber);
//        PhoneAuth phoneAuth = phoneAuthRepository.findByPhoneNumber(phoneNumber);

        user.changePhoneNumber(newPhoneNumber);
        phoneAuthRepository.deleteByPhoneNumber(phoneNumber);

        return 1;
    }


    //로그인
    public User login(String email, String password) {
        return userRepository.findByIdAndPassword(email, password);
    }

    public User loadUserByEmail(String email) throws UsernameNotFoundException {
        return userRepository.findById(email);
    }

    public User findById(String userEmail) {
        return userRepository.findById(userEmail);
    }

    public UserDto findByToken(String token) {
        User targetUser = userRepository.findByToken(token);

        UserDto responseUserDto = UserDto.builder()
                .id(targetUser.getId())
                .nickname(targetUser.getNickname())
                .build();

        return responseUserDto;
    }

    public String updateAccessToken(Long idx, String refreshToken) {
        String targetUserRefreshToken = userRepository.getRefreshToken(idx);
        User targetUser = userRepository.findByIdx(idx);
        if (refreshToken.equals(targetUserRefreshToken)) {
            String newAccessToken = jwtTokenProvider.createToken(targetUser.getId(), targetUser.getRoles());
            return newAccessToken;
        } else {
            return "리프레시 토큰이 맞지 않습니다.";
        }
    }

}
