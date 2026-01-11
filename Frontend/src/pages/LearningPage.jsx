import { useEffect, useState } from "react";
import { getAllTopics } from "../api/topicApi";
import TopicCard from "../components/TopicCard";
import "../styles/learning.css";
import { getUserTopicProgress } from "../api/progressApi";

function LearningPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const [topicsData, progressData] = await Promise.all([
          getAllTopics(),
          getUserTopicProgress(),
        ]);

        setTopics(topicsData);

        const map = {};
        progressData.forEach((p) => {
          map[p.topicId] = p.progress;
        });

        setProgressMap(map);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading topics...</p>;
  }

  if (error) {
    return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  }

  if (topics.length === 0) {
    return <p style={{ padding: "20px" }}>No topics available</p>;
  }

  return (
    <div className="topics-container">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          progress={progressMap[topic.id]}
        />
      ))}
    </div>
  );
}

export default LearningPage;
