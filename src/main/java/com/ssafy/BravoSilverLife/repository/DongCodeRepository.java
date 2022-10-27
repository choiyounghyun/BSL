package com.ssafy.BravoSilverLife.repository;

import com.ssafy.BravoSilverLife.entity.DongCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface DongCodeRepository extends JpaRepository<DongCode, Long> {

    List<DongCode> findByName(String name);

    @Transactional
    void deleteByCode(int col);

}
