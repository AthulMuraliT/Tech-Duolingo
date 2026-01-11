import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">TechDuolingo</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/game">Game</Link>
      </div>
    </nav>
  );
}
