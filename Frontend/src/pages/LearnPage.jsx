import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function LearnPage() {
  const [topics, setTopics] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [termData, setTermData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/topics")
      .then(res => res.json())
      .then(data => {
        setTopics(data);
        if (data.length > 0) setActiveId(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (!activeId) return;

    setLoading(true);
    fetch(`http://localhost:8080/api/topics/${activeId}`)
      .then(res => res.json())
      .then(data => {
        setTermData(data);
        setLoading(false);
      });
  }, [activeId]);

  return (
    <div className="learn-layout">
      <Sidebar
        topics={topics}
        activeId={activeId}
        onSelect={(id) => setActiveId(id)}
      />

      <main className="learn-content">
        {loading && <p>Loading...</p>}

        {!loading && termData && (
          <>
            {/* TERM HEADER */}
            <div className="learn-header">
              <h1>{termData.term}</h1>
              <span className="category-badge">
                {termData.category}
              </span>
            </div>

            {/* DESCRIPTION */}
            <section className="learn-section">
              <h3>📘 Description</h3>
              <p>{termData.description}</p>
            </section>

            {/* CODE SNIPPET */}
            {termData.codeSnippet && (
              <section className="learn-section">
                <h3>💻 Example Code</h3>
                <pre className="code-box">
                  <code>{termData.codeSnippet}</code>
                </pre>
              </section>
            )}

            {/* EXTERNAL LINK */}
            {termData.externalLink && (
              <section className="learn-section">
                <h3>🔗 Learn More</h3>
                <a
                  href={termData.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="external-link"
                >
                  Read official documentation →
                </a>
              </section>
            )}

            {/* ACTION */}
            <button
              className="primary"
              onClick={() => navigate(`/quiz/${termData.id}`)}
            >
              Start Quiz
            </button>
          </>
        )}
      </main>
    </div>
  );
}
