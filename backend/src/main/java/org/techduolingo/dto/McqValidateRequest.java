package org.techduolingo.dto;

public class McqValidateRequest {

    private Long mcqId;
    private Integer selectedOption;

    public Long getMcqId() { return mcqId; }
    public void setMcqId(Long mcqId) { this.mcqId = mcqId; }

    public Integer getSelectedOption() { return selectedOption; }
    public void setSelectedOption(Integer selectedOption) { this.selectedOption = selectedOption; }
}

