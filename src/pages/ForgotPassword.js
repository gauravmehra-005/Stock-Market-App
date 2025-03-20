import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pagesCss/ForgotPassword.css"; // Import the new CSS file

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (u) => u.username === formData.username && u.dob === formData.dob
      );

      if (!user) {
        setMessage("Invalid username or DOB.");
        return;
      }

      await axios.patch(`http://localhost:5000/users/${user.id}`, {
        password: formData.newPassword,
      });

      setMessage("Password reset successfully!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Reset Your Password</h2>
        {message && <p className="forgot-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>New Password:</label>
            <input type="password" name="newPassword" onChange={handleChange} required />
          </div>
          <button type="submit" className="forgot-button">Reset Password</button>
        </form>
        <p className="back-to-login">
          Remember your password?{" "}
          <button onClick={() => navigate("/login")} className="login-button">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
