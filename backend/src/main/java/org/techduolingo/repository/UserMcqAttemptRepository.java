package org.techduolingo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.techduolingo.model.Topic;
import org.techduolingo.model.User;
import org.techduolingo.model.UserMcqAttempt;

public interface UserMcqAttemptRepository
        extends JpaRepository<UserMcqAttempt, Long> {

    long countByUserAndMcq_Topic(User user, Topic topic);

    long countByUserAndMcq_TopicAndIsCorrectTrue(User user, Topic topic);
}
