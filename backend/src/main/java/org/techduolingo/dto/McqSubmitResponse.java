package org.techduolingo.dto;

public class McqSubmitResponse {

    private boolean correct;
    private Integer correctOption;

    public McqSubmitResponse(boolean correct, Integer correctOption) {
        this.correct = correct;
        this.correctOption = correctOption;
    }

    // getters & setters
    public boolean isCorrect() { return correct; }
    public void setCorrect(boolean correct) { this.correct = correct; }

    public Integer getCorrectOption() { return correctOption; }
    public void setCorrectOption(Integer correctOption) { this.correctOption = correctOption; }
}

