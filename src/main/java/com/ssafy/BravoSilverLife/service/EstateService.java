package com.ssafy.BravoSilverLife.service;

import com.ssafy.BravoSilverLife.entity.Condition;

public interface EstateService {

    void getCluster(Condition condition) throws Exception;

    void getArticles(long markerId) throws Exception;

    void getArticleDetail(long articleNo) throws Exception;
}
