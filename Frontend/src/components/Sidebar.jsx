import { useNavigate } from "react-router-dom";

export default function Sidebar({ topics, activeId, onSelect }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {/* HOME BUTTON */}
      <button
        className="sidebar-home"
        onClick={() => navigate("/")}
      >
        ⬅ Home
      </button>

      <h3 className="sidebar-title">Topics</h3>

      <ul className="sidebar-list">
        {topics.map(topic => (
          <li
            key={topic.id}
            className={`sidebar-item ${
              activeId === topic.id ? "active" : ""
            }`}
            onClick={() => onSelect(topic.id)}
          >
            {topic.term}
          </li>
        ))}
      </ul>
    </aside>
  );
}
