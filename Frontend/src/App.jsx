import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LearnPage from "./pages/LearnPage";
import GamePage from "./pages/GamePage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/quiz/:topicId" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}
