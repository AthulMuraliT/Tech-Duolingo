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
      } catch (err) {
        console.error("Failed to load data", err);
        setError("Failed to load topics");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="page-state">Loading topics…</div>;
  }

  if (error) {
    return <div className="page-state error">{error}</div>;
  }

  if (topics.length === 0) {
    return <div className="page-state">No topics available</div>;
  }

  return (
    <div className="learning-page">
      <h1 className="learning-title">Your learning</h1>

      <div className="topics-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            progress={progressMap[topic.id]}
          />
        ))}
      </div>
    </div>
  );
}

export default LearningPage;
