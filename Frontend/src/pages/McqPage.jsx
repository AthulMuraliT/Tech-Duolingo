import { useEffect, useState } from "react";
import { getMcqs, validateMcq } from "../api/mcqApi";
import McqCard from "../components/McqCard";
import "../styles/mcq.css";

function McqPage() {
  const [mcqs, setMcqs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchMcqs() {
      try {
        const data = await getMcqs(5);
        setMcqs(data);
      } catch (error) {
        console.error("Failed to fetch MCQs", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMcqs();
  }, []);

  async function handleAnswer(option) {
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
    } catch (error) {
      console.error("Validation failed", error);
    }
  }

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading MCQs...</p>;
  }

  if (currentIndex >= mcqs.length) {
    return (
      <div className="mcq-container">
        <h2>🎉 Quiz Finished</h2>
        <p>
          Score: {score} / {mcqs.length}
        </p>
      </div>
    );
  }

  const progress =
    ((currentIndex + 1) / mcqs.length) * 100;

  return (
    <div className="mcq-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p>
        Question {currentIndex + 1} / {mcqs.length}
      </p>

      <McqCard
        mcq={mcqs[currentIndex]}
        onAnswer={handleAnswer}
        selectedOption={selectedOption}
        result={result}
      />
    </div>
  );
}

export default McqPage;
