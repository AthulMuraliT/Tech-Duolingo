import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopicById } from "../api/topicApi";

function TopicDetailPage() {
  const { id } = useParams();
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

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading topic...</p>;
  }

  if (!topic) {
    return <p style={{ padding: "20px" }}>Topic not found</p>;
  }

  return (
    <div style={{ padding: "24px", maxWidth: "900px" }}>
      <h1>{topic.term}</h1>

      <p style={{ marginTop: "12px", fontSize: "16px" }}>
        {topic.description}
      </p>

      {topic.codeSnippet && (
        <>
          <h3 style={{ marginTop: "24px" }}>Code Example</h3>
          <pre
            style={{
              background: "#1e1e1e",
              color: "#d4d4d4",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >
            <code>{topic.codeSnippet}</code>
          </pre>
        </>
      )}

      {topic.externalLink && (
        <div style={{ marginTop: "24px" }}>
          <a
            href={topic.externalLink}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#2563eb", fontWeight: "500" }}
          >
            🔗 Learn more
          </a>
        </div>
      )}
    </div>
  );
}

export default TopicDetailPage;
