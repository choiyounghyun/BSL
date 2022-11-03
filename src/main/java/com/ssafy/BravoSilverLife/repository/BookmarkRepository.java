package com.ssafy.BravoSilverLife.repository;

import com.ssafy.BravoSilverLife.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface BookmarkRepository  extends JpaRepository<Bookmark, Long> {

    List<Bookmark> findByUid(String uid);

    @Transactional
    void deleteByUidAndArticleNo(String uid, long articleNo);

}
