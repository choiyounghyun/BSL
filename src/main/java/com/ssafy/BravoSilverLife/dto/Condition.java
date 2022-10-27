package com.ssafy.BravoSilverLife.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString
@Schema(description = "검색 조건")
public class Condition {
    int cortarNo;
    int rentPriceMin;
    int rentPriceMax;
    int priceMin;
    int priceMax;
    int areaMin;
    int areaMax;
    double leftLon;
    double rightLon;
    double topLat;
    double bottomLat;
}