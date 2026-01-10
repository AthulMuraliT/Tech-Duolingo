package org.techduolingo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.techduolingo.model.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long> {
}

