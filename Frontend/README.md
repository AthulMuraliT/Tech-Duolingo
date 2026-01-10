# Code Vocabulary Builder (Tech Duolingo)

A full-stack learning platform to help freshers learn technical terms like API, JWT, Docker using a Duolingo-style approach.

---

## 🚀 Features
- Learn technical topics with descriptions, code snippets & external links
- Topic-based MCQ quizzes
- Instant answer validation
- Progress bar & score tracking
- No user login (lightweight MVP)

---

## 🧠 Tech Stack
### Frontend
- React (Vite)
- React Router
- Axios

### Backend
- Spring Boot
- REST APIs
- MySQL / H2

---

## 📁 Pages
- **Learning Page** → View all topics
- **Topic Detail Page** → Learn in depth
- **MCQ Page** → Test knowledge with quizzes

---

## 🔌 Backend APIs Used
- GET `/api/topics`
- GET `/api/topics/{id}`
- GET `/api/mcqs`
- GET `/api/topics/{id}/mcqs`
- POST `/api/mcqs/validate`

---

## ▶️ How to Run

### Frontend
```bash
npm install
npm run dev
