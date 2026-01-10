package org.techduolingo.dto;

import java.util.List;

public class McqResponseDto {

    private Long id;
    private String question;
    private String codeSnippet;

    private List<String> options;

    public <E> McqResponseDto(Long id, String question, String codeSnippet, List<String> options) {
        this.id = id;
        this.question = question;
        this.codeSnippet = codeSnippet;
        this.options = options;

    }

    // constructor, getters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCodeSnippet() {
        return codeSnippet;
    }

    public void setCodeSnippet(String codeSnippet) {
        this.codeSnippet = codeSnippet;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }
}
