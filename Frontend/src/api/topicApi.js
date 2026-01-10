import apiClient from "./apiClient";

export const getAllTopics = async () => {
  const response = await apiClient.get("/topics");
  return response.data;
};

export const getTopicById = async (id) => {
  const response = await apiClient.get(`/topics/${id}`);
  return response.data;
};
