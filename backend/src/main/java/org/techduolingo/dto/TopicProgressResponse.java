package org.techduolingo.dto;

public class TopicProgressResponse {
    public Long topicId;
    public int progress;
    public boolean completed;

    public TopicProgressResponse(Long topicId, int progress, boolean completed) {
        this.topicId = topicId;
        this.progress = progress;
        this.completed = completed;
    }
}

