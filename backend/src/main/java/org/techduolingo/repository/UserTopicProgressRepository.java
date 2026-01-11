package org.techduolingo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.techduolingo.model.Topic;
import org.techduolingo.model.User;
import org.techduolingo.model.UserTopicProgress;

import java.util.List;
import java.util.Optional;

public interface UserTopicProgressRepository
        extends JpaRepository<UserTopicProgress, Long> {

    Optional<UserTopicProgress> findByUserAndTopic(User user, Topic topic);

    List<UserTopicProgress> findByUser(User user);
}

