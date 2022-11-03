package com.ssafy.BravoSilverLife.entity;

import com.ssafy.BravoSilverLife.dto.StoreDto;
import lombok.*;
import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table
public class Bookmark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idx;
    long articleNo;
    String id;
    String name;
}
