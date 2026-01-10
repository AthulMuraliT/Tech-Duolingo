package org.techduolingo.dto;

import java.util.List;

public class McqResponseDTO {

    private Long id;
    private String question;
    private String codeSnippet;
    private List<String> options;

    public McqResponseDTO(Long id, String question, String codeSnippet, List<String> options) {
        this.id = id;
        this.question = question;
        this.codeSnippet = codeSnippet;
        this.options = options;
    }

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public String getCodeSnippet() { return codeSnippet; }
    public void setCodeSnippet(String codeSnippet) { this.codeSnippet = codeSnippet; }

    public List<String> getOptions() { return options; }
    public void setOptions(List<String> options) { this.options = options; }
}

