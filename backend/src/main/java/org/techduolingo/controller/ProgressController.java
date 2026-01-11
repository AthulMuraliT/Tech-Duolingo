package org.techduolingo.controller;

import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.ProgressUpdateRequest;
import org.techduolingo.dto.TopicProgressResponse;
import org.techduolingo.model.User;
import org.techduolingo.service.ProgressService;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin
public class ProgressController {

    private final ProgressService progressService;

    public ProgressController(ProgressService progressService) {
        this.progressService = progressService;
    }

    @PostMapping("/topic")
    public ResponseEntity<?> updateTopicProgress(
            @RequestBody ProgressUpdateRequest request,
            Authentication authentication
    ) {
        User user = (User) authentication.getPrincipal();
        progressService.updateProgress(user, request);
        return ResponseEntity.ok("Progress updated");
    }

    @GetMapping("/topic")
    public List<TopicProgressResponse> getTopicProgress(
            Authentication authentication
    ) {
        User user = (User) authentication.getPrincipal();
        return progressService.getUserProgress(user);
    }
}
