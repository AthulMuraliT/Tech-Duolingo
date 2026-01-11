package org.techduolingo.controller;

import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.dto.McqValidateRequest;
import org.techduolingo.dto.McqValidateResponse;
import org.techduolingo.service.McqService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class McqController {

    @Autowired
    private McqService mcqService;

    //Get random MCQs with limit
    @GetMapping("/mcqs")
    public List<McqResponseDTO> getMcqs(
            @RequestParam(defaultValue = "5") int limit
    ) {
        return mcqService.getRandomMcqs(limit);
    }

    //Get MCQs for a topic
    @GetMapping("/topics/{id}/mcqs")
    public List<McqResponseDTO> getMcqsByTopic(@PathVariable Long id) {
        return mcqService.getMcqsByTopic(id);
    }

    //Validate MCQ answer
    @PostMapping("/mcqs/validate")
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
