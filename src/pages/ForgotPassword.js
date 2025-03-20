import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate=useNavigate()
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
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={handleChange} required />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" name="newPassword" onChange={handleChange} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
