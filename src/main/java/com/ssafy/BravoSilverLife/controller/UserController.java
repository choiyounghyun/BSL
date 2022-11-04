package com.ssafy.BravoSilverLife.controller;

import com.ssafy.BravoSilverLife.entity.User;
import com.ssafy.BravoSilverLife.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Data
    static class CreateUserResponse {
        private Long user_id;
        public CreateUserResponse(Long user_id)
        {
            this.user_id = user_id;
        }
    }

    @Data
    static class Description {
        private String description;
    }



    //닉네임 변경
    @PutMapping("/profile/{nickname}/{newnickname}")
    public int chageNickname(@PathVariable("nickname") String nickname,
                             @PathVariable("newnickname") String newNickname) {
        try {
            return userService.changeNickname(nickname,newNickname);
        } catch (Exception e)
        {
            return 0;
        }
    }




    @Data
    static class LoginUserRequest {
        @NotEmpty
        private String email;
        @NotEmpty
        private String password;
    }

    @Data
    @AllArgsConstructor
    static class UpdateNicknameResponse {
        private Long id;
        private String nickname;
    }


}
