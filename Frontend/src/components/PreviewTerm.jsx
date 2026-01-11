import { useNavigate } from "react-router-dom";

export default function PreviewTerm() {
  const navigate = useNavigate();   // ✅ FIX

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Preview a Term</h2>

        <div className="term-card">
          <h3>API</h3>

          <p className="term-desc">
            A bridge that allows applications to communicate.
          </p>

          <pre className="code-block">
{`fetch('/users')
  .then(res => res.json())
  .then(data => console.log(data));`}
          </pre>

          <button
            className="primary-btn"
            onClick={() => navigate("/learn")}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
