package com.ssafy.BravoSilverLife.dto;

import com.ssafy.BravoSilverLife.entity.Bookmark;
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
    String name;

    public static BookmarkDto of(Bookmark bookmarkEntity) {

        BookmarkDto bookmarkDto = BookmarkDto.builder()
                .articleNo(bookmarkEntity.getArticleNo())
                .name(bookmarkEntity.getName())
                .build();

        return bookmarkDto;
    }
}
