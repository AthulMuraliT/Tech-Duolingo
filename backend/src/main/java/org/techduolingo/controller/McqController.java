package org.techduolingo.controller;

import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.McqResponseDto;
import org.techduolingo.dto.McqSubmitRequest;
import org.techduolingo.dto.McqSubmitResponse;
import org.techduolingo.service.McqService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class McqController {

    private final McqService mcqService;

    public McqController(McqService mcqService) {
        this.mcqService = mcqService;
    }

    // GET MCQs for game
    @GetMapping("/topics/{topicId}/mcqs")
    public List<McqResponseDto> getMcqs(@PathVariable Long topicId) {
        return mcqService.getMcqsByTopic(topicId);
    }

    // POST validate answer
    @PostMapping("/mcqs/validate")
    public McqSubmitResponse validate(@RequestBody McqSubmitRequest request) {
        return mcqService.validateAnswer(request);
    }
}
