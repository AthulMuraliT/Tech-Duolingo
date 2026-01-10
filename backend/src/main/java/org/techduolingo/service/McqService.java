package org.techduolingo.service;

import org.springframework.stereotype.Service;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.dto.McqValidateRequest;
import org.techduolingo.dto.McqSubmitResponse;
import org.techduolingo.model.Mcq;
import org.techduolingo.repository.McqRepository;


import java.util.Arrays;
import java.util.List;

@Service
public class McqService {

    private final McqRepository mcqRepository;

    public McqService(McqRepository mcqRepository) {
        this.mcqRepository = mcqRepository;
    }

    // Fetch MCQs for game (NO answers leaked)
    public List<McqResponseDTO> getMcqsByTopic(Long topicId) {

        List<Mcq> mcqs = mcqRepository.findByTopicId(topicId);

        return mcqs.stream().map(mcq ->
                new McqResponseDTO(
                        mcq.getId(),
                        mcq.getQuestion(),
                        mcq.getCodeSnippet(),
                        Arrays.asList(
                                mcq.getOption1(),
                                mcq.getOption2(),
                                mcq.getOption3(),
                                mcq.getOption4()
                        )
                )
        ).toList();
    }

    // Validate answer (core game logic)
    public McqSubmitResponse validateAnswer(McqValidateRequest request) {

        Mcq mcq = mcqRepository.findById(request.getMcqId())
                .orElseThrow(() -> new RuntimeException("MCQ not found"));

        boolean isCorrect =
                mcq.getCorrectOption()==request.getSelectedOption();

        return new McqSubmitResponse(
                isCorrect,
                mcq.getCorrectOption()
        );
    }
}
