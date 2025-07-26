import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = () => {
  return (
    <section className="weather-section">
      <div className="weather-header">
        <h2>Why Weather Forecasting Matters</h2>
        <p>
          Accurate weather forecasts help reduce crop damage, optimize water usage, and improve harvest timings. 
          By staying ahead of the weather, farmers can save resources and increase yield.
        </p>
      </div>

      <div className="weather-features">
        <div className="weather-card">
          <span className="icon">🛡️</span>
          <h3>Reduce Crop Damage</h3>
          <p>Protect your crops from unexpected weather conditions</p>
        </div>
        <div className="weather-card">
          <span className="icon">💧</span>
          <h3>Optimize Water Usage</h3>
          <p>Plan irrigation schedules based on rainfall predictions</p>
        </div>
        <div className="weather-card">
          <span className="icon">📅</span>
          <h3>Better Timing</h3>
          <p>Choose optimal times for sowing and harvesting</p>
        </div>
      </div>

      <div className="coming-soon">
       <div className="coming-heading"><h2> Coming Soon</h2></div> 
        <div className="soon-grid">
          <div className="soon-card">
            <span className="icon">🔔</span>
            <h3>Real-time Rain Alerts</h3>
            <p>Get instant SMS notifications about incoming rain</p>
          </div>
          <div className="soon-card">
            <span className="icon">🎙️</span>
            <h3>Voice Assistant</h3>
            <p>Regional language support for weather updates</p>
          </div>
          <div className="soon-card">
            <span className="icon">📍</span>
            <h3>Auto-location Detection</h3>
            <p>GPS-based automatic location identification</p>
          </div>
          <div className="soon-card">
            <span className="icon">🌱</span>
            <h3>Soil Data Integration</h3>
            <p>Soil moisture and temperature monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
