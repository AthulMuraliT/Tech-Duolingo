import apiClient from "./apiClient";

export const getMcqs = async (limit = 5) => {
  const response = await apiClient.get(`/mcqs?limit=${limit}`);
  return response.data;
};

export const validateMcq = async (mcqId, selectedOption) => {
  const response = await apiClient.post("/mcqs/validate", {
    mcqId,
    selectedOption,
  });
  return response.data;
};
