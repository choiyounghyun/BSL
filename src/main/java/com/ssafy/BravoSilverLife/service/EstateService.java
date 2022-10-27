package com.ssafy.BravoSilverLife.service;

import com.ssafy.BravoSilverLife.dto.ArticleDetail;
import com.ssafy.BravoSilverLife.dto.ArticleList;
import com.ssafy.BravoSilverLife.dto.Cluster;
import com.ssafy.BravoSilverLife.dto.Condition;
import org.json.simple.JSONObject;

import java.util.List;

public interface EstateService {

    List<Cluster> getClusters(Condition condition) throws Exception;

    ArticleList getArticles(long markerId, int page, Condition condition) throws Exception;

    ArticleDetail getArticleDetail(long articleNo) throws Exception;

}
