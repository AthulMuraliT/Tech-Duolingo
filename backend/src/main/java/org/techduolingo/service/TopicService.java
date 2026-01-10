package org.techduolingo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.techduolingo.dto.TopicListDTO;
import org.techduolingo.model.Topic;
import org.techduolingo.repository.TopicRepository;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    public List<TopicListDTO> getAllTopics() {
        return topicRepository.findAll().stream()
                .map(t -> new TopicListDTO(
                        t.getId(),
                        t.getTerm(),
                        t.getDescription().substring(0, Math.min(60, t.getDescription().length()))
                ))
                .toList();
    }

    public Topic getTopicById(Long id) {
        return topicRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Topic not found"));
    }
}

