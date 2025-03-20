import React from "react";
import { useNavigate } from "react-router-dom";
import Watchlist from "./Watchlist";
import Balance from "./Balance";
import Holdings from "./Holdings";
import "../pagesCss/Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome to the Stock Market App</h2>
      <h1 className="dashboard-subheading">Portfolio Dashboard</h1>

      <div className="dashboard-card">
        <Balance />
      </div>

      <div className="dashboard-section">
        <h3 className="dashboard-section-title">Watchlist</h3>
        <div className="dashboard-table-container">
          <Watchlist />
        </div>
      </div>

      <div className="dashboard-section">
        <h3 className="dashboard-section-title">Holdings</h3>
        <div className="dashboard-table-container">
          <Holdings />
        </div>
      </div>

      <button className="dashboard-button" onClick={() => navigate("/change-password")}>
        🔑 Change Password
      </button>
    </div>
  );
};

export default Dashboard;
