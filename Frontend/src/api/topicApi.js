import apiClient from "./apiClient";

export const getAllTopics = async () => {
  const response = await apiClient.get("/topics");
  return response.data;
};

export const getTopicById = async (id) => {
  const response = await apiClient.get(`/topics/${id}`);
  return response.data;
};






































// // src/api/topicApi.js

// const topics = [
//   {
//     id: "1",
//     term: "JavaScript Basics",
//     description:
//       "JavaScript is a programming language used to create dynamic and interactive content on websites.",
//     codeSnippet: `// Declaring variables
// let name = "John";
// const age = 25;

// // Function
// function greet(user) {
//   return "Hello " + user;
// }

// console.log(greet(name));`,
//     externalLink:
//       "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
//   },
//   {
//     id: "2",
//     term: "React Fundamentals",
//     description:
//       "React is a JavaScript library for building user interfaces using components.",
//     codeSnippet: `function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// export default Welcome;`,
//     externalLink: "https://react.dev/learn",
//   },
//   {
//     id: "3",
//     term: "HTML & CSS",
//     description:
//       "HTML defines the structure of a webpage, while CSS styles it.",
//     codeSnippet: `<!DOCTYPE html>
// <html>
//   <head>
//     <style>
//       h1 {
//         color: blue;
//       }
//     </style>
//   </head>
//   <body>
//     <h1>Hello World</h1>
//   </body>
// </html>`,
//     externalLink:
//       "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
//   },
// ];

// // already used by LearningPage
// export async function getAllTopics() {
//   await new Promise((resolve) => setTimeout(resolve, 400));
//   return topics;
// }

// // 🔥 used by TopicDetailPage
// export async function getTopicById(id) {
//   await new Promise((resolve) => setTimeout(resolve, 400));

//   return topics.find((topic) => topic.id === id) || null;
// }



















// export async function getAllTopics() {
//   await new Promise((resolve) => setTimeout(resolve, 500));

//   return [
//     {
//       id: 1,
//       title: "JavaScript Basics",
//       description: "Variables, data types, and operators",
//     },
//     {
//       id: 2,
//       title: "React Fundamentals",
//       description: "Components, props, and state",
//     },
//     {
//       id: 3,
//       title: "HTML & CSS",
//       description: "Structure, styling, and layouts",
//     },
//     {
//       id: 4,
//       title: "Data Structures",
//       description: "Arrays, stacks, queues, and linked lists",
//     },
//     {
//       id: 5,
//       title: "Algorithms",
//       description: "Searching and sorting techniques",
//     },
//   ];
// }
