package org.techduolingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TopicListDTO {
    private Long id;
    private String term;
    private String shortDescription;
}