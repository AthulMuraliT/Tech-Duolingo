package org.techduolingo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.TopicListDTO;
import org.techduolingo.model.Topic;
import org.techduolingo.service.TopicService;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin
public class TopicController {

    @Autowired
    private TopicService topicService;

    // 1️⃣ Get all topics
    @GetMapping
    public List<TopicListDTO> getAllTopics() {
        return topicService.getAllTopics();
    }

    // 2️⃣ Get topic details by ID
    @GetMapping("/{id}")   // <-- Fix here
    public Topic getTopicById(@PathVariable Long id) {
        return topicService.getTopicById(id);
    }
}

