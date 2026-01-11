import { useNavigate } from "react-router-dom";
import "../styles/topicCard.css";

function TopicCard({ topic, progress }) {
  const navigate = useNavigate();

  return (
    <div
      className="topic-card"
      onClick={() => navigate(`/topics/${topic.id}`)}
    >
      <div className="card-header">
        <h3>{topic.term}</h3>
        {progress >= 100 && <span className="badge">Completed</span>}
      </div>

      <p className="card-desc">{topic.shortDescription}</p>

      {progress !== undefined && (
        <>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="progress-text">{progress}% completed</p>
        </>
      )}
    </div>
  );
}

export default TopicCard;
