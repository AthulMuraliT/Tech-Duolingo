import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Tech Duolingo</h2>

      <div className="nav-links">
        <Link to="/">Learn</Link>
          <Link to="/mcq?topicId=1">MCQ Test</Link>
      </div>
    </nav>
  );
}

export default Navbar;
