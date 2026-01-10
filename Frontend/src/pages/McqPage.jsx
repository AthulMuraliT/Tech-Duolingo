import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getMcqsByTopic, validateMcq } from "../api/mcqApi";
import McqCard from "../components/McqCard";
import "../styles/mcq.css";

function McqPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const topicId = searchParams.get("topicId");

  const [mcqs, setMcqs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ------------------ FETCH MCQS ------------------
  useEffect(() => {
    if (!topicId) {
      setError("Topic ID missing");
      setLoading(false);
      return;
    }

    async function fetchMcqs() {
      try {
        const data = await getMcqsByTopic(topicId);

        if (!data || data.length === 0) {
          setError("No MCQs available for this topic");
        } else {
          setMcqs(data);
        }
      } catch (err) {
        console.error("Failed to fetch MCQs", err);
        setError("Failed to load MCQs");
      } finally {
        setLoading(false);
      }
    }

    fetchMcqs();
  }, [topicId]);

  // ------------------ HANDLE ANSWER ------------------
  async function handleAnswer(option) {
    if (selectedOption) return;

    setSelectedOption(option);

    const currentMcq = mcqs[currentIndex];

    try {
      const res = await validateMcq(currentMcq.id, option);
      setResult(res.correct);

      if (res.correct) {
        setScore((prev) => prev + 1);
      }

      setTimeout(() => {
        setSelectedOption(null);
        setResult(null);
        setCurrentIndex((prev) => prev + 1);
      }, 800);
    } catch (err) {
      console.error("Answer validation failed", err);
      setError("Answer validation failed");
    }
  }

  // ------------------ LOADING ------------------
  if (loading) {
    return <p style={{ padding: "20px" }}>Loading MCQs...</p>;
  }

  // ------------------ ERROR ------------------
  if (error) {
    return (
        <div style={{ padding: "20px", color: "red" }}>
          <p>{error}</p>
          <button
              style={{ marginTop: "12px" }}
              onClick={() => navigate("/")}
          >
            Back to Topics
          </button>
        </div>
    );
  }

  // ------------------ QUIZ FINISHED ------------------
  if (currentIndex >= mcqs.length) {
    return (
        <div className="mcq-container">
          <h2>🎉 Quiz Finished</h2>
          <p>
            Score: {score} / {mcqs.length}
          </p>

          <button
              className="option-btn"
              style={{ marginTop: "16px" }}
              onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setSelectedOption(null);
                setResult(null);
              }}
          >
            Restart Quiz
          </button>

          <button
              className="option-btn"
              style={{ marginTop: "10px" }}
              onClick={() => navigate("/")}
          >
            Back to Topics
          </button>
        </div>
    );
  }

  // ------------------ PROGRESS ------------------
  const progress = ((currentIndex + 1) / mcqs.length) * 100;

  return (
      <div className="mcq-container">
        <div className="progress-bar">
          <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
          />
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
