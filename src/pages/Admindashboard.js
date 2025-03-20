import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage stocks, users, and system settings.</p>

      <button onClick={() => navigate("/add-stock")}>Add Stocks</button>
      <button onClick={() => navigate("/view-stocks")}>View Stocks</button>
      <button onClick={() => navigate("/manage-users")}>Manage Users</button>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
