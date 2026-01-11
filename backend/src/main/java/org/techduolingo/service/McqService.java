package org.techduolingo.service;

import org.springframework.stereotype.Service;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.model.*;
import org.techduolingo.repository.*;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class McqService {

    private final McqRepository mcqRepo;
    private final UserMcqAttemptRepository attemptRepo;
    private final UserTopicProgressRepository progressRepo;

    public McqService(
            McqRepository mcqRepo,
            UserMcqAttemptRepository attemptRepo,
            UserTopicProgressRepository progressRepo
    ) {
        this.mcqRepo = mcqRepo;
        this.attemptRepo = attemptRepo;
        this.progressRepo = progressRepo;
    }

    /* ==============================
       GET MCQs BY TOPIC
       ============================== */
    public List<McqResponseDTO> getMcqsByTopic(Long topicId) {

        return mcqRepo.findByTopicId(topicId)
                .stream()
                .map(m -> new McqResponseDTO(
                        m.getId(),
                        m.getQuestion(),
                        m.getCodeSnippet(),
                        List.of(
                                m.getOption1(),
                                m.getOption2(),
                                m.getOption3(),
                                m.getOption4()
                        )
                ))
                .toList();
    }

    /* ==============================
       GET RANDOM MCQs (LIMIT)
       ============================== */
    public List<McqResponseDTO> getRandomMcqs(int limit) {

        return mcqRepo.findRandomMcqs(limit)
                .stream()
                .map(m -> new McqResponseDTO(
                        m.getId(),
                        m.getQuestion(),
                        m.getCodeSnippet(),
                        List.of(
                                m.getOption1(),
                                m.getOption2(),
                                m.getOption3(),
                                m.getOption4()
                        )
                ))
                .toList();
    }

    /* ==============================
       VALIDATE MCQ ANSWER (USER AWARE)
       ============================== */
    public boolean validateAnswer(
            Long mcqId,
            int selectedOption,
            User user
    ) {

        Mcq mcq = mcqRepo.findById(mcqId)
                .orElseThrow(() -> new RuntimeException("MCQ not found"));

        boolean correct = mcq.getCorrectOption() == selectedOption;

        // 1️⃣ Save MCQ attempt
        UserMcqAttempt attempt = new UserMcqAttempt();
        attempt.setUser(user);
        attempt.setMcq(mcq);
        attempt.setSelectedOption(selectedOption);
        attempt.setCorrect(correct);
        attempt.setAttemptedAt(LocalDateTime.now());

        attemptRepo.save(attempt);

        // 2️⃣ Update topic progress
        updateTopicProgress(user, mcq.getTopic());

        return correct;
    }

    /* ==============================
       UPDATE TOPIC PROGRESS
       ============================== */
    private void updateTopicProgress(User user, Topic topic) {

        long totalAttempts =
                attemptRepo.countByUserAndMcq_Topic(user, topic);

        long correctAttempts =
                attemptRepo.countByUserAndMcq_TopicAndIsCorrectTrue(user, topic);

        if (totalAttempts == 0) return;

        int progress = (int) ((correctAttempts * 100) / totalAttempts);

        UserTopicProgress utp = progressRepo
                .findByUserAndTopic(user, topic)
                .orElseGet(() -> {
                    UserTopicProgress p = new UserTopicProgress();
                    p.setUser(user);
                    p.setTopic(topic);
                    return p;
                });

        utp.setProgress(progress);
        utp.setCompleted(progress >= 80); // configurable threshold
        utp.setUpdatedAt(LocalDateTime.now());

        progressRepo.save(utp);
    }
}
