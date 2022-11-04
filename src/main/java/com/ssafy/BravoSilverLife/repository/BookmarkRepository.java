package com.ssafy.BravoSilverLife.repository;

import com.ssafy.BravoSilverLife.entity.Bookmark;
import com.ssafy.BravoSilverLife.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

    List<Bookmark> findByUser(User user);

    Optional<Bookmark> findByUserAndArticleNo(User user, Long articleNo);

    @Transactional
    void deleteByUserAndArticleNo(User user, long articleNo);

}
