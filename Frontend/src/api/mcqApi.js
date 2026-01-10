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

// export const getMcqsByTopic = async (topicId, limit = 5) => {
//   const response = await apiClient.get(
//     `/topics/${topicId}/mcqs?limit=${limit}`
//   );
//   return response.data;
// };

export const getMcqsByTopic = async (topicId) => {
  const response = await apiClient.get(`/topics/${topicId}/mcqs`);
  return response.data;
};

























































// // src/api/mcqApi.js

// // ------------------ MOCK MCQ DATA ------------------

// const mcqs = [
//   {
//     id: "m1",
//     topicId: "1",
//     question: "Which keyword is used to declare a variable in JavaScript?",
//     options: ["var", "int", "string", "float"],
//     correctOption: 1,
//   },
//   {
//     id: "m2",
//     topicId: "1",
//     question: "What is the output of typeof null?",
//     options: ["null", "object", "undefined", "number"],
//     correctOption: 2,
//   },
//   {
//     id: "m3",
//     topicId: "2",
//     question: "What is a React component?",
//     options: [
//       "A JavaScript function or class",
//       "A database",
//       "A CSS file",
//       "A browser API",
//     ],
//     correctOption: 1,
//   },
//   {
//     id: "m4",
//     topicId: "2",
//     question: "Which hook is used to manage state in functional components?",
//     options: ["useEffect", "useRef", "useState", "useMemo"],
//     correctOption: 3,
//   },
//   {
//     id: "m5",
//     topicId: "3",
//     question: "Which tag is used to define a hyperlink in HTML?",
//     options: ["<link>", "<a>", "<href>", "<url>"],
//     correctOption: 2,
//   },
//   {
//     id: "m6",
//     topicId: "3",
//     question: "Which CSS property changes text color?",
//     options: ["font-style", "background", "color", "text-decoration"],
//     correctOption: 3,
//   },
// ];

// // ------------------ API FUNCTIONS ------------------

// export async function getMcqs(limit = 5) {
//   await new Promise((resolve) => setTimeout(resolve, 400));
//   return mcqs.slice(0, limit);
// }

// export async function getMcqsByTopic(topicId, limit = 5) {
//   await new Promise((resolve) => setTimeout(resolve, 400));

//   return mcqs
//     .filter((mcq) => mcq.topicId === topicId)
//     .slice(0, limit);
// }

// export async function validateMcq(mcqId, selectedOption) {
//   await new Promise((resolve) => setTimeout(resolve, 300));

//   const mcq = mcqs.find((m) => m.id === mcqId);

//   if (!mcq) {
//     throw new Error("MCQ not found");
//   }

//   return {
//     correct: mcq.correctOption === selectedOption,
//   };
// }
