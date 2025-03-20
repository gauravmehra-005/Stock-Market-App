import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pagesCss/ChangePassword.css"; // Import the new CSS file

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (u) => u.username === formData.username && u.password === formData.oldPassword
      );

      if (!user) {
        setMessage("Invalid username or old password.");
        return;
      }

      await axios.patch(`http://localhost:5000/users/${user.id}`, {
        password: formData.newPassword,
      });

      setMessage("Password changed successfully!");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      setMessage("Error changing password.");
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-box">
        <h2>Change Password</h2>
        {message && <p className="change-password-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Old Password:</label>
            <input type="password" name="oldPassword" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>New Password:</label>
            <input type="password" name="newPassword" onChange={handleChange} required />
          </div>
          <button type="submit" className="change-password-button">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
