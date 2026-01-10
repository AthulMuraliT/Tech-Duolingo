import apiClient from "./apiClient";

// Get MCQs by topic
export const getMcqsByTopic = async (topicId) => {
  const response = await apiClient.get(`/topics/${topicId}/mcqs`);
  return response.data;
};

// Validate MCQ answer
export const validateMcq = async (mcqId, selectedOption) => {
  const response = await apiClient.post("/mcqs/validate", {
    mcqId,
    selectedOption,
  });
  return response.data;
};
