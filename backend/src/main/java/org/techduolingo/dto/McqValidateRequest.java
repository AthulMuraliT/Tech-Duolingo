package org.techduolingo.dto;

import lombok.Data;

@Data
public class McqValidateRequest {
    private Long mcqId;
    private int selectedOption;
}
