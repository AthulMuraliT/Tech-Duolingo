import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTopicById } from "../api/topicApi";
import "../styles/topicDetail.css";

function TopicDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopic() {
      try {
        const data = await getTopicById(id);
        setTopic(data);
      } catch (error) {
        console.error("Failed to fetch topic", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopic();
  }, [id]);

  if (loading) return <div className="page-state">Loading topic…</div>;
  if (!topic) return <div className="page-state">Topic not found</div>;

  return (
    <div className="topic-detail">
      <h1 className="topic-title">{topic.term}</h1>

      <p className="topic-description">{topic.description}</p>

      {topic.codeSnippet && (
        <div className="code-section">
          <h3>Code Example</h3>
          <pre>
            <code>{topic.codeSnippet}</code>
          </pre>
        </div>
      )}

      {topic.externalLink && (
        <a
          href={topic.externalLink}
          target="_blank"
          rel="noreferrer"
          className="learn-more"
        >
          Learn more
        </a>
      )}

      <button
        className="quiz-btn"
        onClick={() => navigate(`/mcq?topicId=${topic.id}`)}
      >
        Take Quiz on {topic.term}
      </button>
    </div>
  );
}

export default TopicDetailPage;
