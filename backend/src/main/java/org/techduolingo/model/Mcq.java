package org.techduolingo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "mcqs")
@Data
public class Mcq {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;

    @Column(length = 500)
    private String question;

    @Column(length = 500)
    private String codeSnippet;

    private String option1;
    private String option2;
    private String option3;
    private String option4;

    private int correctOption; // 1 / 2 / 3 / 4
}