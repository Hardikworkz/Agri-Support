// src/components/MandiPrices.jsx
import React, { useState, useEffect } from "react";
import "./MandiPrices.css";

const DEFAULT_CROPS = ["Tomato", "Potato", "Onion"];

const MandiPrices = () => {
  const [crop, setCrop] = useState("");
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState("");

  const fetchPrices = async (cropName) => {
    try {
      const res = await fetch(`http://localhost:3000/api/mandi?crop=${cropName}`);
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Failed to fetch");

      setPrices(data.prices);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    DEFAULT_CROPS.forEach((c) => fetchPrices(c));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!crop) return;
    fetchPrices(crop);
  };

  return (
    <div className="mandi-container">
      <h2>🛒 Real-time Mandi Prices</h2>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search crop (e.g., Brinjal)"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <div className="error">{error}</div>}

      <div className="mandi-grid">
        {prices.map((item, idx) => (
          <div key={idx} className="mandi-card">
            <h3>🥬 {item.crop}</h3>
            <p><strong>📍 {item.market}</strong></p>
            <p>Price: ₹{item.min_price} - ₹{item.max_price} /kg</p>
            <p>📅 {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandiPrices;
