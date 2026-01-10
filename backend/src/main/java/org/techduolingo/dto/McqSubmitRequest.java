package org.techduolingo.dto;

import lombok.Data;

@Data
public class McqSubmitRequest {
    private Long mcqId;
    private int selectedOption;
}
