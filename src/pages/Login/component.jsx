import { useState } from "react";
import useLogin from "@/hooks/api/auth/useLogin";
import { useNavigate } from "react-router-dom";
import { FaClinicMedical  } from "react-icons/fa";
import "./style.scss";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(username, password);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        <div className="login-form-container">
          <div className="form-header">
            <FaClinicMedical  size={24} color="var(--color-accent)" />
            <h1 className="fs32 fw800">Clinic - X</h1>
          </div>

          <h2 className="fs26 fw600">For your Health</h2>
          <p className="fs14 color-text-subtle mb24">
            Sign in to track your Health Report.
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            {error && <p className="error-message fs14 mb20">{error}</p>}

            <div className="input-group fs16 fw400">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="login-button fs16 fw600"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className="login-image-panel"></div>
      </div>
    </div>
  );
};

export default Login;