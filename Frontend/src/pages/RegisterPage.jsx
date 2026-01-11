import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import "../styles/auth.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  async function handleRegister(e) {
    e.preventDefault();

    await apiClient.post("/auth/register", {
      username,
      email,
      password,
    });

    navigate("/login");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h1>Create account</h1>
        <p className="auth-muted">Start learning with Tech Duolingo</p>

        <form onSubmit={handleRegister}>
          <div className="field">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-btn">
            Create account
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
