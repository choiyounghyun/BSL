package com.ssafy.BravoSilverLife.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString
@Schema(description = "북마크")
public class BookmarkDto {

    long articleNo;
    String uid;
    String name;
}
