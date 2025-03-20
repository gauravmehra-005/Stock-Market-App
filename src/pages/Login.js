import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/users`);
      const user = response.data.find(
        (u) => u.username === credentials.username && u.password === credentials.password
      );

      if (user) {
        setMessage("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000); // Redirect to Dashboard
      } else {
        setMessage("Invalid username or password.");
      }
      
    } catch (error) {
      setMessage("Error logging in.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      
        <p>
            Forgot your password?{" "}
             <button onClick={() => navigate("/forgot-password")}>Reset Here</button>
        </p>
    </div>
    
  );
};

export default Login;
