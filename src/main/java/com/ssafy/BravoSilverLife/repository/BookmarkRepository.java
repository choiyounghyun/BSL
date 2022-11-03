package com.ssafy.BravoSilverLife.repository;

import com.ssafy.BravoSilverLife.entity.Bookmark;
import com.ssafy.BravoSilverLife.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface BookmarkRepository  extends JpaRepository<Bookmark, Long> {


    List<Bookmark> findByUser(User user);

    @Transactional
    void deleteByUserAndArticleNo(User user, Long articleNo);

}
