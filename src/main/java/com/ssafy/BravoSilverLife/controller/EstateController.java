package com.ssafy.BravoSilverLife.controller;


import com.ssafy.BravoSilverLife.entity.Condition;
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

@Tag(name = "Estate", description = "EstateAPI")
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/estate")
public class EstateController {

    @Autowired
    EstateService estateService;

    @Operation(summary = "채널 갱신 상태 확인", description = "갱신 가능 여부 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/cluster")
    public ResponseEntity getCluster(Condition condition) throws Exception {
        estateService.getCluster(condition);
        return ResponseEntity.status(200).body("OK");

    }

    @Operation(summary = "채널 갱신 상태 확인", description = "갱신 가능 여부 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/articles")
    public ResponseEntity getArticles(long markerId) throws Exception {
        estateService.getArticles(markerId);
        return ResponseEntity.status(200).body("OK");

    }

    @Operation(summary = "채널 갱신 상태 확인", description = "갱신 가능 여부 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/article-detail")
    public ResponseEntity getArticleDetail(long articleNo) throws Exception {
        estateService.getArticleDetail(articleNo);
        return ResponseEntity.status(200).body("OK");

    }

}
