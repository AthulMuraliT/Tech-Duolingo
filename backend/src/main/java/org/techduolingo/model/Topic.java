package org.techduolingo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "topics")
@Data
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String term;

    @Column(length = 1000)
    private String description;

    @Column(length = 500)
    private String codeSnippet;

    private String externalLink;

    private String category;
}
