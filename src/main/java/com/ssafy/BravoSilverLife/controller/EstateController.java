package com.ssafy.BravoSilverLife.controller;

import com.ssafy.BravoSilverLife.dto.ArticleDetail;
import com.ssafy.BravoSilverLife.dto.ArticleList;
import com.ssafy.BravoSilverLife.dto.Cluster;
import com.ssafy.BravoSilverLife.dto.Condition;
import com.ssafy.BravoSilverLife.service.EstateService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Estate", description = "EstateAPI")
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/estate")
public class EstateController {

    @Autowired
    EstateService estateService;

    Condition test = new Condition(1174010200, 0, 900000000, 0, 900000000, 0, 900000000, 127.15817519531251,
            127.1698329, 37.563346675000005, 37.559772);
    // Condition test = new Condition(1174010200, 0, 900000000, 0, 900000000, 0,
    // 900000000, 127, 128, 38, 35);

    @Operation(summary = "매물 클러스터", description = "좌표로 매물 클러스터를 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/clusters")
    public ResponseEntity getClusters(Condition condition) throws Exception {

        List<Cluster> clusters = estateService.getClusters(test);
        return ResponseEntity.status(200).body(clusters);
    }

    @Operation(summary = "클러스터 내 매물 확인", description = "클러스터 내 매물 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/articles")
    public ResponseEntity getArticles(long markerId, int page, Condition condition) throws Exception {
        ArticleList articleList = estateService.getArticles(markerId, page, condition);
        return ResponseEntity.status(200).body(articleList);
    }

    @Operation(summary = "매물 상세 확인", description = "매물 상세 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/article-detail")
    public ResponseEntity getArticleDetail(long articleNo) throws Exception {
        ArticleDetail articleDetail = estateService.getArticleDetail(articleNo);
        return ResponseEntity.status(200).body(articleDetail);

    }

}
