package org.techduolingo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.dto.McqValidateRequest;
import org.techduolingo.dto.McqValidateResponse;
import org.techduolingo.service.McqService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class McqController {

    @Autowired
    private McqService mcqService;

    // 3️⃣ Get MCQs for topic
    @GetMapping("/topics/{id}/mcqs")
    public List<McqResponseDTO> getMcqs(@PathVariable Long id) {
        return mcqService.getMcqsByTopic(id);
    }

    // 4️⃣ Validate answer
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
