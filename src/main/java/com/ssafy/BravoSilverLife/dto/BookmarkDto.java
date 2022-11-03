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
    String add;

    public static BookmarkDto of(Bookmark bookmarkEntity) {

        BookmarkDto bookmarkDto = BookmarkDto.builder()
                .articleNo(bookmarkEntity.getArticleNo())
                .add(bookmarkEntity.getAdd())
                .build();

        return bookmarkDto;
    }
}
