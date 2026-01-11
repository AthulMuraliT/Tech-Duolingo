package org.techduolingo.service;


import org.springframework.stereotype.Service;
import org.techduolingo.dto.McqResponseDTO;
import org.techduolingo.dto.McqValidateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.techduolingo.model.Mcq;
import org.techduolingo.repository.McqRepository;

import java.util.List;


@Service
public class McqService {

    @Autowired
    private McqRepository mcqRepository;

    public List<McqResponseDTO> getMcqsByTopic(Long topicId) {

        return mcqRepository.findByTopicId(topicId)
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

    public List<McqResponseDTO> getRandomMcqs(int limit) {

        return mcqRepository.findRandomMcqs(limit)
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

    public boolean validateAnswer(Long mcqId, int selectedOption) {

        Mcq mcq = mcqRepository.findById(mcqId)
                .orElseThrow(() -> new RuntimeException("MCQ not found"));

        return mcq.getCorrectOption() == selectedOption;
    }
}
