package com.ssafy.BravoSilverLife.securityOAuth.advice.error;

import com.ssafy.BravoSilverLife.securityOAuth.advice.payload.ErrorCode;

import lombok.Getter;

@Getter
public class DefaultNullPointerException extends NullPointerException{
    
    private ErrorCode errorCode;

    public DefaultNullPointerException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
