package org.techduolingo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.techduolingo.model.Mcq;

import java.util.List;

public interface McqRepository extends JpaRepository<Mcq, Long> {

    // Get MCQs by topic
    List<Mcq> findByTopicId(Long topicId);

    // Get random MCQs with limit
    @Query(value = "SELECT * FROM mcq ORDER BY RAND() LIMIT :limit", nativeQuery = true)
    List<Mcq> findRandomMcqs(@Param("limit") int limit);
}
