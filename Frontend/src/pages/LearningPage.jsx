import { useEffect, useState } from "react";
import { getAllTopics } from "../api/topicApi";
import TopicCard from "../components/TopicCard";
import "../styles/learning.css";

function LearningPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const data = await getAllTopics();
        setTopics(data);
      } catch (error) {
        console.error("Failed to fetch topics", error);
        setError("Failed to load topics");
      } finally {
        setLoading(false);
      }
    }

    fetchTopics();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading topics...</p>;
  }

  if (error) {
    return (
      <p style={{ padding: "20px", color: "red" }}>
        {error}
      </p>
    );
  }

  if (topics.length === 0) {
    return <p style={{ padding: "20px" }}>No topics available</p>;
  }

  return (
    <div className="topics-container">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}

export default LearningPage;
