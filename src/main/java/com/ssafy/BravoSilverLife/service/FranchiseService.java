package com.ssafy.BravoSilverLife.service;


import com.ssafy.BravoSilverLife.dto.Franchise;

import java.util.List;

public interface FranchiseService {

    List<Franchise> getFranchisesByCount(String category) throws Exception;

    List<Franchise> getFranchisesByPopular(String category) throws Exception;
}
