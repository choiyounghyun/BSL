package com.ssafy.BravoSilverLife.controller;


import com.ssafy.BravoSilverLife.service.MMSService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class MMSController {

    private final MMSService mmsService;

    @Operation(summary = "인증번호 발송 버튼", description = "인증번호 발송 & DB에 해당 핸드폰 번호에 인증번호 저장")
    @GetMapping("/check/{phone_number}")
    public void MMSCheck(@PathVariable String phone_number){
        String access_token = mmsService.userAuth();
        mmsService.checkAuthByMMS(access_token, phone_number);
    }

}
