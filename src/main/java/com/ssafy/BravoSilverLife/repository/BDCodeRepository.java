package com.ssafy.BravoSilverLife.repository;

import com.ssafy.BravoSilverLife.entity.BDCode;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BDCodeRepository extends JpaRepository<BDCode, Long> {

    List<BDCode> findByDongName(String dongName);

}
