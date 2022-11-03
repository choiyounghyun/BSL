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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="Id")
    private User user;

    String address;
    String price;
}
