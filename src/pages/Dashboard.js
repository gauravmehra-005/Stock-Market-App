import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Welcome to the Stock Market App</h2>
      <p>Your account is now active.</p>

      <button onClick={() => navigate("/change-password")}>
        Change Password
      </button>
    </div>
  );
};

export default Dashboard;
