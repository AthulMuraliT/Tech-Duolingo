package org.techduolingo.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.dto.McqValidateRequest;
import org.techduolingo.dto.McqValidateResponse;
import org.techduolingo.model.User;
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

    /* ==============================
       GET RANDOM MCQs (LIMIT)
       ============================== */
    @GetMapping("/mcqs")
    public List<McqResponseDTO> getRandomMcqs(
            @RequestParam(defaultValue = "5") int limit
    ) {
        return mcqService.getRandomMcqs(limit);
    }

    /* ==============================
       GET MCQs BY TOPIC
       ============================== */
    @GetMapping("/topics/{id}/mcqs")
    public List<McqResponseDTO> getMcqsByTopic(@PathVariable Long id) {
        return mcqService.getMcqsByTopic(id);
    }

    /* ==============================
       VALIDATE MCQ ANSWER (JWT)
       ============================== */
    @PostMapping("/mcqs/validate")
    public McqValidateResponse validate(
            @RequestBody McqValidateRequest request,
            Authentication authentication
    ) {

        if (request.getSelectedOption() < 1 || request.getSelectedOption() > 4) {
            throw new RuntimeException("Invalid option");
        }

        User user = (User) authentication.getPrincipal();

        boolean correct = mcqService.validateAnswer(
                request.getMcqId(),
                request.getSelectedOption(),
                user
        );

        return new McqValidateResponse(correct);
    }
}
