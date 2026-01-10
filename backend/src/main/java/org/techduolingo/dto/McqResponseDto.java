package org.techduolingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class McqResponseDto {

    private Long id;
    private String question;
    private String codeSnippet;
    private List<String> options;
}
