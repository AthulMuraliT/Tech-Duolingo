import { Routes, Route } from "react-router-dom";
import LearningPage from "../pages/LearningPage";
import TopicDetailPage from "../pages/TopicDetailPage";
import McqPage from "../pages/McqPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LearningPage />} />
      <Route path="/topics/:id" element={<TopicDetailPage />} />
      <Route path="/mcq" element={<McqPage />} />
    </Routes>
  );
}

export default AppRoutes;
