import apiClient from "./apiClient";

export const getUserTopicProgress = async () => {
  const response = await apiClient.get("/progress/topic");
  return response.data;
};
