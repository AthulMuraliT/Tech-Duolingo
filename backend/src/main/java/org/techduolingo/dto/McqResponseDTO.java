package org.techduolingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class McqResponseDTO {
    private Long id;
    private String question;
    private String codeSnippet;
    private List<String> options;
}

