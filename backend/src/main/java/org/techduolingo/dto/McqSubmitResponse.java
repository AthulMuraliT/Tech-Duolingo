package org.techduolingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class McqSubmitResponse {
    private boolean correct;
    private int correctOption;
}


