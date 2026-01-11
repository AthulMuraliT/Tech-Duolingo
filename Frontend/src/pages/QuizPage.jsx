import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [mcqs, setMcqs] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH MCQs ================= */
  useEffect(() => {
    fetch(`http://localhost:8080/api/topics/${topicId}/mcqs`)
      .then(res => res.json())
      .then(data => {
        console.log("MCQS FROM BACKEND:", data); // ✅ debug
        setMcqs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [topicId]);

  /* ================= SUBMIT ANSWER ================= */
  const submitAnswer = (optionIndex) => {
    setSelected(optionIndex);

    fetch("http://localhost:8080/api/mcqs/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mcqId: mcqs[current].id,
        selectedOption: optionIndex + 1   // backend expects 1–4
      })
    })
      .then(res => res.json())
      .then(data => {
        setIsCorrect(data.correct);
        if (data.correct) setScore(prev => prev + 1);
      });

    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      setCurrent(prev => prev + 1);
    }, 1200);
  };

  /* ================= STATES ================= */
  if (loading) return <p>Loading...</p>;

  if (mcqs.length === 0) {
    return <p>No questions available</p>;
  }

  if (current >= mcqs.length) {
    return (
      <div className="quiz-page">
        <h2>Quiz Completed 🎉</h2>
        <p>
          Your Score: <strong>{score} / {mcqs.length}</strong>
        </p>

        <button className="primary" onClick={() => navigate("/learn")}>
          Back to Learn
        </button>
      </div>
    );
  }

  /* ================= CURRENT QUESTION ================= */
  const q = mcqs[current];

  return (
    <div className="quiz-page">
      {/* SCORE */}
      <div className="quiz-score">
        Score: {score}
      </div>

      {/* BACK */}
      <button
        className="game-nav-btn"
        onClick={() => navigate("/learn")}
      >
        ← Back
      </button>

      {/* QUIZ CARD */}
      <div className="quiz-card">
        <h2 className="quiz-question">{q.question}</h2>

        <div className="quiz-options">
          {q.options.map((opt, i) => {
            let className = "quiz-option";

            if (selected !== null) {
              if (i === selected && isCorrect) className += " correct";
              if (i === selected && isCorrect === false) className += " wrong";
            }

            return (
              <button
                key={i}
                className={className}
                disabled={selected !== null}
                onClick={() => submitAnswer(i)}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
