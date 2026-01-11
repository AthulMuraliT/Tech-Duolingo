// src/api/api.js
const API = "http://localhost:8080/api";

export const getTopics = () =>
  fetch(`${API}/topics`).then(r => r.json());

export const getTopic = (id) =>
  fetch(`${API}/topics/${id}`).then(r => r.json());

export const getMcqs = (id) =>
  fetch(`${API}/topics/${id}/mcqs`).then(r => r.json());

export const validateMcq = (mcqId, selectedOption) =>
  fetch(`${API}/mcqs/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mcqId, selectedOption })
  }).then(r => r.json());
