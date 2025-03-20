import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    dob: "",
    deposit: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure deposit is not more than ₹1,00,000
    if (parseInt(formData.deposit) > 100000) {
      setMessage("Deposit amount cannot exceed ₹1,00,000");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/users", formData);
      if (response.status === 201) {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 sec
      }
    } catch (error) {
      setMessage("Error registering user.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={handleChange} required />
        </div>
        <div>
          <label>Initial Deposit:</label>
          <input type="number" name="deposit" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <button onClick={() => navigate("/login")}>Login</button></p>
    </div>
  );
};

export default Register;
