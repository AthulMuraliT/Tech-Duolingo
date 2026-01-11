import { useNavigate } from "react-router-dom";

function TopicCard({ topic, progress }) {
  const navigate = useNavigate();

  return (
    <div
      className="topic-card"
      onClick={() => navigate(`/topics/${topic.id}`)}
    >
      <h3>{topic.term}</h3>
      <p>{topic.shortDescription}</p>

      {progress !== undefined && (
        <>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p style={{ fontSize: "14px" }}>
            {progress}% {progress >= 100 ? "✅ Completed" : ""}
          </p>
        </>
      )}
    </div>
  );
}

export default TopicCard;
