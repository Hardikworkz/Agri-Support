import React, { useState } from "react";
import "./WeatherWidget.css";


import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiThunderstorm,
} from "react-icons/wi";
import Header from "../../../components/HEADER/Header";

const WeatherWidget = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherIcon = (condition) => {
    if (!condition) return <WiDaySunny />;
    const text = condition.toLowerCase();
    if (text.includes("rain")) return <WiRain />;
    if (text.includes("cloud")) return <WiCloudy />;
    if (text.includes("thunder")) return <WiThunderstorm />;
    return <WiDaySunny />;
  };

  const handleSearch = async () => {
  if (!location) return;
  setLoading(true);
  setError("");
  try {
    const res = await fetch(
      `http://localhost:3000/api/weather?city=${location}`
    );

    const data = await res.json();
    console.log("🌦️ Weather response:", data);

    if (!res.ok || data.error) {
      throw new Error(data.error || "Location not found");
    }

    setWeatherData(data);
  } catch (err) {
    console.error("❌ Fetch error:", err.message);
    setError("Could not fetch weather data. Try another city.");
  } finally {
    setLoading(false);
  }
};


  const renderAdvice = (temp, humidity, rainChance) => {
    if (rainChance >= 70) {
      return "🌧️ Heavy rain likely. Avoid sowing for next 2 days.";
    } else if (temp >= 28 && humidity <= 60) {
      return "🌱 Ideal time to sow cotton.";
    } else {
      return "📋 Monitor weather daily for best farming decisions.";
    }
  };

  return (
    <div className="weather">
    
          <Header/>

    <div className="weather-widget">
      <h2 className="weather-title">Weather Forecast</h2>
      <p>Stay informed. Make smarter farming decisions with accurate, real-time weather updates.</p>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city (e.g., Nashik)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* Loading */}
      {loading && <div className="loading">Fetching weather data...</div>}

      {/* Error */}
      {error && <div className="error">{error}</div>}

      {/* Weather Display */}
      {weatherData && (
        <>
          <div className="weather-current">
            <div className="weather-location">
              <FaMapMarkerAlt className="icon" /> {weatherData.location}
            </div>
            <div className="weather-temp">{weatherData.current.temp}°C</div>
            <div className="weather-details">
              <div>
                <FaTemperatureHigh /> {weatherData.current.condition}
              </div>
              <div>
                <FaTint /> Humidity: {weatherData.current.humidity}%
              </div>
              <div>
                <FaWind /> Wind: {weatherData.current.windSpeed} km/h
              </div>
            </div>
          </div>

          {/* Forecast */}
          <div className="weather-forecast">
            {weatherData.forecast?.map((day, idx) => {
              const date = new Date(day.date);
              const dayName = date.toLocaleDateString("en-US", {
                weekday: "short",
              });

              return (
                <div key={idx} className="forecast-day">
                  <div className="forecast-dayname">{dayName}</div>
                  <div className="forecast-icon">
                    {getWeatherIcon(day.condition)}
                  </div>
                  <div className="forecast-temp">
                    {day.high}° / {day.low}°
                  </div>
                </div>
              );
            })}
          </div>

          {/* Advice */}
          <div className="weather-advice">
            {renderAdvice(
              weatherData.current.temp,
              weatherData.current.humidity,
              70 
            )}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default WeatherWidget;
