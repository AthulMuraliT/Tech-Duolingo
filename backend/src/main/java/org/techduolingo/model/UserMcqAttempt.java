package org.techduolingo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_mcq_attempt")
public class UserMcqAttempt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "mcq_id")
    private Mcq mcq;

    private int selectedOption;

    private boolean isCorrect;

    private LocalDateTime attemptedAt = LocalDateTime.now();

    // ===== Getters =====

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Mcq getMcq() {
        return mcq;
    }

    public int getSelectedOption() {
        return selectedOption;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public LocalDateTime getAttemptedAt() {
        return attemptedAt;
    }

    // ===== Setters =====

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setMcq(Mcq mcq) {
        this.mcq = mcq;
    }

    public void setSelectedOption(int selectedOption) {
        this.selectedOption = selectedOption;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

    public void setAttemptedAt(LocalDateTime attemptedAt) {
        this.attemptedAt = attemptedAt;
    }
}
