package org.techduolingo.repository;

public interface McqRepository extends JpaRepository<Mcq, Long> {

    List<Mcq> findByTopicId(Long topicId);
}
