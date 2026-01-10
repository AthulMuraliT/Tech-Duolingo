package org.techduolingo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Mcq {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;

    private String question;
    private String codeSnippet;

    private String option1;
    private String option2;
    private String option3;
    private String option4;

    // 🔥 THIS WAS MISSING
    private int correctOption; // values: 1,2,3,4
}
