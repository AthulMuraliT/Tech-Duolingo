package org.techduolingo.controller;

import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.dto.McqValidateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.McqValidateResponse;
import org.techduolingo.service.McqService;

import java.util.List;

@RestController
@RequestMapping("/api/mcqs")
@CrossOrigin
public class McqController {

    @Autowired
    private McqService mcqService;

    // Get MCQs for topic
    @GetMapping("/api/topics/{topicId}/mcqs")
    public List<McqResponseDTO> getMcqs(@PathVariable Long id) {
        return mcqService.getMcqsByTopic(id);
    }

    // Validate answer
    @PostMapping("/api/mcqs/validate")
    public McqValidateResponse validate(@RequestBody McqValidateRequest request) {

        if (request.getSelectedOption() < 1 || request.getSelectedOption() > 4) {
            throw new RuntimeException("Invalid option");
        }

        boolean correct = mcqService.validateAnswer(
                request.getMcqId(),
                request.getSelectedOption()
        );

        return new McqValidateResponse(correct);
    }
}
