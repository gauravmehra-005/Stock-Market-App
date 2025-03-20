import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pagesCss/Watchlist.css"; 

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/watchlist")
      .then(response => setWatchlist(response.data))
      .catch(error => console.error("Error fetching watchlist:", error));
  }, []);

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">📊 Watchlist</h2>
      <table className="watchlist-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Company</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.symbol}</td>
              <td>{stock.company}</td>
              <td>${stock.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
