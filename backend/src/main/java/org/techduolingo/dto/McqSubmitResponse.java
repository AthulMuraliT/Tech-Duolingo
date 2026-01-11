package org.techduolingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class McqSubmitResponse {
    private boolean correct;
    private int correctOption;

    public McqSubmitResponse(boolean correct, int correctOption) {
        this.correct = correct;
        this.correctOption = correctOption;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public int getCorrectOption() {
        return correctOption;
    }

    public void setCorrectOption(int correctOption) {
        this.correctOption = correctOption;
    }
}


