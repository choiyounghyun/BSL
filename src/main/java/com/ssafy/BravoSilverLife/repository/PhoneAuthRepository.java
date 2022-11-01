package com.ssafy.BravoSilverLife.repository;

import com.ssafy.BravoSilverLife.entity.PhoneAuth;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PhoneAuthRepository extends JpaRepository<PhoneAuth, Long> {
    PhoneAuth findByPhoneNumber(String phoneNumber);


}
