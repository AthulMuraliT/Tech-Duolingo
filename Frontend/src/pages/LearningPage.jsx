import { useEffect, useState } from "react";
import { getAllTopics } from "../api/topicApi";
import TopicCard from "../components/TopicCard";
import "../styles/learning.css";

function LearningPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const data = await getAllTopics();
        setTopics(data);
      } catch (error) {
        console.error("Failed to fetch topics", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopics();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading topics...</p>;
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
