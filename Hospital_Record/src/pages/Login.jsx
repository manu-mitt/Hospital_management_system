import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHospital, FaUsers, FaUserMd, FaCalendarAlt, FaUser, FaLock, FaArrowRight } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="hospital-icon"><FaHospital /></div>
            <h1>Welcome to Hospital Management System</h1>
            <p>Your trusted partner in healthcare management. Access your dashboard to manage patients, doctors, and appointments efficiently.</p>
            <div className="features">
              <div className="feature">
                <span className="feature-icon"><FaUsers /></span>
                <span>Patient Management</span>
              </div>
              <div className="feature">
                <span className="feature-icon"><FaUserMd /></span>
                <span>Doctor Scheduling</span>
              </div>
              <div className="feature">
                <span className="feature-icon"><FaCalendarAlt /></span>
                <span>Smart Appointments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="login-container">
          <div className="login-header">
            <h2>Sign In</h2>
            <p>Please enter your credentials to access the system</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <span className="input-icon"><FaUser /></span>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <span className="input-icon"><FaLock /></span>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>

          <button className="login-btn" onClick={login}>
            <span>Login</span>
            <span className="btn-icon"><FaArrowRight /></span>
          </button>

          <div className="credentials-hint">
            <p><strong>Demo Credentials:</strong></p>
            <p>Username: admin</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
