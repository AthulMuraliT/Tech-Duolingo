import apiClient from "./apiClient";

// Get all topics
export const getAllTopics = async () => {
  const response = await apiClient.get("/topics");
  return response.data;
};

// Get topic by ID
export const getTopicById = async (id) => {
  const response = await apiClient.get(`/topics/${id}`);
  return response.data;
};
