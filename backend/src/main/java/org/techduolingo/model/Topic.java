package org.techduolingo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String term;

    @Column(length = 2000)
    private String description;

    private String codeSnippet;
    private String externalLink;
}
