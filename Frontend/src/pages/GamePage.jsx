import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/topics")
      .then(res => res.json())
      .then(data => {
        setTopics(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="game">
      {/* NAV */}
      <div className="game-nav">
        <button className="game-nav-btn" onClick={() => navigate("/")}>
          ← Home
        </button>
        <button className="game-nav-btn" onClick={() => navigate("/learn")}>
          ← Learn
        </button>
      </div>

      {/* CONTEXT HEADER */}
      <div className="game-header">
        <h1>Play & Learn</h1>
        <p className="game-subtitle">
          Choose a topic and test your understanding with quick MCQs
        </p>
      </div>

      {/* CARDS */}
      <div className="game-grid">
        {topics.map(topic => (
          <div
            key={topic.id}
            className="game-card"
            onClick={() => navigate(`/quiz/${topic.id}`)}
          >
            <h3>{topic.term}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
