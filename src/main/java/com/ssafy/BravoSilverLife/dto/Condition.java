package com.ssafy.BravoSilverLife.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Condition {

    float rentPriceMin;
    float rentPriceMax;
    float priceMin;
    float priceMax;
    float areaMin;
    float areaMax;
    float leftLon;
    float rightLon;
    float topLat;
    float bottomLat;

}