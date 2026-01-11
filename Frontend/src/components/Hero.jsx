import { useNavigate } from "react-router-dom";
import Hero3D from "./Hero3D";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">

        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Keep Learning <br />
            <span>On Track</span>
          </h1>

          <p>
            Learn core tech concepts with real code examples,
            clear explanations, and interactive quizzes —
            designed for freshers and developers.
          </p>

          <button
            className="primary"
            onClick={() => navigate("/learn")}
          >
            Start Learning
          </button>
        </div>

        {/* RIGHT */}
        <Hero3D />

      </div>
    </section>

  );
}
