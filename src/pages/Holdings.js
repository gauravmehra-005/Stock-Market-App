import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pagesCss/Holdings.css";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/holdings")
      .then(response => setHoldings(response.data))
      .catch(error => console.error("Error fetching holdings:", error));
  }, []);

  return (
    <div>
      <h2>Holdings</h2>
      <ul>
        {holdings.map(stock => (
          <li key={stock.id}>
            {stock.symbol} - {stock.company} - {stock.quantity} shares @ ${stock.buyPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Holdings;
