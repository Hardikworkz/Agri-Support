import React, { useState } from "react";
import "./CropSuggestion.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaLeaf,  FaChartLine, FaShieldAlt, FaDollarSign } from "react-icons/fa";
import { GiCorn } from "react-icons/gi";
import { TbWheat } from "react-icons/tb";
import crop from '../../assets/crop.jpg'

import droneImg from '../../assets/droneImg.jpg';
import droneImg2 from '../../assets/droneImg2.jpg';
import cropsImg from '../../assets/cropsImg.jpg';
import farmImg from '../../assets/farmImg.jpg';


const CropSuggestion = () => {
  const [city, setCity] = useState("");
  const [soil, setSoil] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");

  const handleSuggest = async () => {
    if (!city || !soil) {
      setError("Please enter both city and soil type");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/crops/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, soil }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get suggestions");

      setSuggestions(data.crops);
      setError("");
    } catch (err) {
      console.error("❌ Fetch error:", err.message);
      setError("Could not fetch suggestions.");
    }
  };

  return (
    <div className="crop-suggestion-page">
      {/* Hero Section */}
      <section className="crop-section">
        <div className="hero-left">
          <span className="badge">🌱 Smart Agriculture Technology</span>
          <h1>
            Choose the <span className="highlight">Perfect Crop</span><br />
            for Maximum Yield
          </h1>
          <p>
            Make data-driven decisions for your farm. Our intelligent crop planning tool
            analyzes soil conditions, climate patterns, and market trends to recommend the
            most profitable crops for your land.
          </p>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your city (e.g., Nashik)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <select value={soil} onChange={(e) => setSoil(e.target.value)}>
              <option value="">Soil type</option>
              <option value="black">Black Soil</option>
              <option value="red">Red Soil</option>
              <option value="alluvial">Alluvial Soil</option>
              <option value="laterite">Laterite Soil</option>
              <option value="sandy">Sandy Soil</option>
            </select>

            <button onClick={handleSuggest}><IoSearchSharp /></button>
          </div>

          {error && <div className="error">{error}</div>}
        </div>

        <div className="hero-right">
          <img
            src={crop}
            alt="Farmer"
            className="hero-image"
          />
          <div className="yield-card">
            <p>Yield Increase</p>
            <strong>+35%</strong>
          </div>
        </div>
      </section>

      {/* Crop Suggestions */}
      {suggestions.length > 0 && (
        <section className="crop-suggestions">
          <h3>Suggested Crops Based on Your Input</h3>
          <div className="crop-grid">
            {suggestions.map((crop, index) => (
              <div key={index} className="crop-card">
                <img
                  src={crop.image || "https://via.placeholder.com/150"}
                  alt={crop.name}
                  className="crop-image"
                />
                <div className="crop-info">
                  <input type="radio" name="cropSelect" id={`crop-${index}`} />
                  <label htmlFor={`crop-${index}`}>
                    <h4>{crop.name}</h4>
                    <p>{crop.advice}</p>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recommended Crops */}
      <section className="recommended-crops">
        <h3>Recommended Crops for Your Region</h3>
        <p className="subtitle">Based on current soil and climate conditions</p>
        <div className="crop-recommendations">
          <div className="crop-card-advanced wheat">
            <div className="match-badge"><icon><TbWheat /></icon> <match>88% Match</match></div>
            <h4>Wheat</h4>
            <p>Optimal conditions for high-yield wheat production. Expected ROI: 140%</p>
            <ul>
              <li><strong>Planting Season:</strong> Fall</li>
              <li><strong>Water Needs:</strong> Medium</li>
              <li><strong>Market Price:</strong><price> $6.50/bu</price></li>
            </ul>
          </div>
          <div className="crop-card-advanced corn">
            <div className="match-badge"><icon><GiCorn /></icon> <match>88% Match</match></div>
            <h4>Corn</h4>
            <p>Good conditions for corn with proper irrigation. Expected ROI: 125%</p>
            <ul>
              <li><strong>Planting Season:</strong> Spring</li>
              <li><strong>Water Needs:</strong> High</li>
              <li><strong>Market Price:</strong> <price> $4.20/bu</price></li>
            </ul>
          </div>
          <div className="crop-card-advanced soybeans">
            <div className="match-badge"><icon><FaLeaf /></icon> <match>82% Match</match></div>
            <h4>Soybeans</h4>
            <p>Moderate conditions suitable for soybean cultivation. Expected ROI: 115%</p>
            <ul>
              <li><strong>Planting Season:</strong> Late Spring</li>
              <li><strong>Water Needs:</strong> Medium</li>
              <li><strong>Market Price:</strong> <price> $12.80/bu</price></li>
            </ul>
          </div>
        </div>
      </section>

    {/* Why Smart Crop Planning */}
      <section className="why-smart">
        
        <div className="why-content">
          <div className="why-left">
            <h3>Why Smart Crop Planning Changes Everything</h3>
            <p>Traditional farming relies on guesswork and outdated methods. Smart crop planning uses real data to maximize your success and minimize risks.</p>
            <ul className="why-list">
              <li><FaChartLine className="icon" /><strong> Increase Yields by 35%</strong> </li> <desc> Data-driven decisions lead to optimal crop selection and higher productivity per acre.</desc>
              <li><FaShieldAlt className="icon" /><strong> Reduce Risk by 60%</strong></li> <desc> Avoid crop failures by choosing varieties suited to your specific conditions.</desc>
              <li><FaDollarSign className="icon" /><strong> Boost Profits by 40%</strong> </li><desc> Market analysis ensures you grow crops with the best return on investment.</desc>
            </ul>
          </div>
          <div className="why-right">
            <div className="why-grid">
              <img src={farmImg} alt="Field" className="grid-img" />
              <img src={droneImg}alt="Drone" className="grid-img" />
              <img src={cropsImg} alt="Crops" className="grid-img" />
              <img src={droneImg2} alt="Drone 2" className="grid-img" />
            </div>
            <div className="success-rate-card">
              <p>Success Rate</p>
              <strong>94%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming Next */}
      <section className="whats-next">
        <h3>What's Coming Next</h3>
        <div className="next-features">
          <div className="feature-box">
            <h4>AI Weather Insights</h4>
            <p>Get precise weather predictions tailored to your crops and region.</p>
          </div>
          <div className="feature-box">
            <h4>Auto Connection</h4>
            <p>Automatically link with agri-markets and local government data.</p>
          </div>
          <div className="feature-box">
            <h4>Middle App</h4>
            <p>Connect with vendors, buyers, and transport providers in one place.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CropSuggestion;
