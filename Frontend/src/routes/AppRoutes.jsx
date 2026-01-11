import { Routes, Route } from "react-router-dom";
import LearningPage from "../pages/LearningPage";
import TopicDetailPage from "../pages/TopicDetailPage";
import McqPage from "../pages/McqPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <LearningPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/topics/:id"
        element={
          <PrivateRoute>
            <TopicDetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/mcq"
        element={
          <PrivateRoute>
            <McqPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
