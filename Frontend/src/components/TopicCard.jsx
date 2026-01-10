import { useNavigate } from "react-router-dom";

function TopicCard({ topic }) {
  const navigate = useNavigate();

  return (
    <div
      className="topic-card"
      onClick={() => navigate(`/topics/${topic.id}`)}
    >
      <h3>{topic.term}</h3>
      <p>{topic.shortDescription}</p>
    </div>
  );
}

export default TopicCard;
