import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Change Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Old Password:</label>
          <input type="password" name="oldPassword" onChange={handleChange} required />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" name="newPassword" onChange={handleChange} required />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
