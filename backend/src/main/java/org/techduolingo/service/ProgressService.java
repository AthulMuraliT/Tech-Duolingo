package org.techduolingo.service;

import org.springframework.stereotype.Service;
import org.techduolingo.dto.ProgressUpdateRequest;
import org.techduolingo.dto.TopicProgressResponse;
import org.techduolingo.model.Topic;
import org.techduolingo.model.User;
import org.techduolingo.model.UserTopicProgress;
import org.techduolingo.repository.TopicRepository;
import org.techduolingo.repository.UserTopicProgressRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProgressService {

    private final UserTopicProgressRepository progressRepo;
    private final TopicRepository topicRepo;

    public ProgressService(UserTopicProgressRepository progressRepo,
                           TopicRepository topicRepo) {
        this.progressRepo = progressRepo;
        this.topicRepo = topicRepo;
    }

    public void updateProgress(User user, ProgressUpdateRequest req) {

        Topic topic = topicRepo.findById(req.topicId)
                .orElseThrow(() -> new RuntimeException("Topic not found"));

        UserTopicProgress progress =
                progressRepo.findByUserAndTopic(user, topic)
                        .orElseGet(() -> {
                            UserTopicProgress p = new UserTopicProgress();
                            p.setUser(user);
                            p.setTopic(topic);
                            return p;
                        });

        progress.setProgress(req.progress);
        progress.setCompleted(req.progress >= 100);
        progress.setUpdatedAt(LocalDateTime.now());

        progressRepo.save(progress);
    }

    public List<TopicProgressResponse> getUserProgress(User user) {
        return progressRepo.findByUser(user)
                .stream()
                .map(p -> new TopicProgressResponse(
                        p.getTopic().getId(),
                        p.getProgress(),
                        p.isCompleted()
                ))
                .toList();
    }
}
