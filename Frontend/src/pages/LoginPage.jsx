import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import "../styles/auth.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await apiClient.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h1>Sign in</h1>
        <p className="auth-muted">Continue to Tech Duolingo</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="field">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            Sign in
          </button>
        </form>

        <div className="auth-footer">
          <span>New here?</span>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
