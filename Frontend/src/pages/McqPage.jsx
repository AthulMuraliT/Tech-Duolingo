import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMcqs, getMcqsByTopic, validateMcq } from "../api/mcqApi";
import McqCard from "../components/McqCard";
import "../styles/mcq.css";

function McqPage() {
  const [mcqs, setMcqs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);

  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topicId");

  useEffect(() => {
    async function fetchMcqs() {
      try {
        const data = topicId
          ? await getMcqsByTopic(topicId, 5)
          : await getMcqs(5);
        setMcqs(data);
      } catch (error) {
        console.error("Failed to fetch MCQs", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMcqs();
  }, [topicId]);

  async function handleAnswer(option) {
    setSelectedOption(option);
    const currentMcq = mcqs[currentIndex];

    try {
      const res = await validateMcq(currentMcq.id, option);
      setResult(res.correct);

      if (res.correct) setScore((prev) => prev + 1);

      setTimeout(() => {
        setSelectedOption(null);
        setResult(null);
        setCurrentIndex((prev) => prev + 1);
      }, 700);
    } catch (error) {
      console.error("Validation failed", error);
    }
  }

  if (loading) {
    return <div className="mcq-state">Loading questions…</div>;
  }

  if (currentIndex >= mcqs.length) {
    return (
      <div className="mcq-container">
        <div className="mcq-finish">
          <h2>Quiz complete</h2>
          <p>
            Score: <strong>{score}</strong> / {mcqs.length}
          </p>

          <button
            className="primary-btn"
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setSelectedOption(null);
              setResult(null);
            }}
          >
            Restart quiz
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / mcqs.length) * 100;

  return (
    <div className="mcq-container">
      <div className="mcq-header">
        <span>
          Question {currentIndex + 1} of {mcqs.length}
        </span>
        <span className="mcq-score">Score: {score}</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <McqCard
        mcq={mcqs[currentIndex]}
        selectedOption={selectedOption}
        result={result}
        onSelect={handleAnswer}
      />
    </div>
  );
}

export default McqPage;
