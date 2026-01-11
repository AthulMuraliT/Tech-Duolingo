import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* BRAND */}
        <div>
          <div className="footer-logo">Tech Duolingo</div>
          <p className="footer-text">
            Learn tech concepts with real code and interactive quizzes.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="footer-title">Product</h4>
          <ul>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/game">Play Quiz</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="footer-title">Resources</h4>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org"
                target="_blank"
                rel="noreferrer"
              >
                MDN Docs
              </a>
            </li>
            <li>
              <a
                href="https://docs.oracle.com/en/java/"
                target="_blank"
                rel="noreferrer"
              >
                Java Docs
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="footer-title">Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Tech Duolingo. All rights reserved.
      </div>
    </footer>
  );
}
