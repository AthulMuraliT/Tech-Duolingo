package org.techduolingo.dto;

import lombok.Data;

@Data
public class McqSubmitRequest {
    private Long mcqId;
    private int selectedOption;

    public Long getMcqId() {
        return mcqId;
    }

    public void setMcqId(Long mcqId) {
        this.mcqId = mcqId;
    }

    public int getSelectedOption() {
        return selectedOption;
    }

    public void setSelectedOption(int selectedOption) {
        this.selectedOption = selectedOption;
    }
}
