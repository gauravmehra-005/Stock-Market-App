import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pagesCss/Login.css"; // Import the new CSS file

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check for admin login
      if (credentials.username === "admin" && credentials.password === "admin") {
        setMessage("Admin login successful!");
        setTimeout(() => navigate("/admin-dashboard"), 1000); // Redirect to Admin Dashboard
        return;
      }

      // Normal user login
      const response = await axios.get(`http://localhost:5000/users`);
      const user = response.data.find(
        (u) =>
          u.username === credentials.username &&
          u.password === credentials.password
      );

      if (user) {
        setMessage("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000); // Redirect to User Dashboard
      } else {
        setMessage("Invalid username or password.");
      }
    } catch (error) {
      setMessage("Error logging in.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {message && <p className="login-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="forgot-password">
          Forgot your password?{" "}
          <button onClick={() => navigate("/forgot-password")} className="reset-button">
            Reset Here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
