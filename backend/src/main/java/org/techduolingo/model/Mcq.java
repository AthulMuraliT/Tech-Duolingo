package org.techduolingo.model;

@Entity
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

    // store 1,2,3,4
    private int correctOption;
}
