import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pagesCss/Balance.css"; 

const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5001/balance")
      .then(response => setBalance(response.data.amount))
      .catch(error => console.error("Error fetching balance:", error));
  }, []);

  return (
    <div>
      <h2>Account Balance</h2>
      <p>${balance}</p>
    </div>
  );
};

export default Balance;
