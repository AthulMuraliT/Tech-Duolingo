package org.techduolingo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.techduolingo.model.Mcq;

import java.util.List;

public interface McqRepository extends JpaRepository<Mcq, Long> {

    List<Mcq> findByTopicId(Long topicId);
}
