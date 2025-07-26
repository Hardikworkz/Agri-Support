const axios = require('axios');

const getWeatherData = async ({ city, lat, lon }) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log("🔑 Loaded API Key:", apiKey);

  if (!apiKey) throw new Error("API key is missing!");

  try {
    const locationQuery = lat && lon ? `${lat},${lon}` : `${city},India`;

    if (!locationQuery) throw new Error("City or coordinates required");

    const queryURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationQuery}&days=5&aqi=no&alerts=no`;

    console.log("Fetching weather from:", queryURL);
    const response = await axios.get(queryURL);
    const data = response.data;

    console.log("✅ Weather Data Fetched");

    return {
      location: data.location.name,
      current: {
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      },
      forecast: data.forecast.forecastday.map(day => ({
        date: day.date,
        high: day.day.maxtemp_c,
        low: day.day.mintemp_c,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
      }))
    };
  } catch (error) {
    console.error("❌ Error fetching weather:", error.response?.data || error.message);
    throw new Error("Failed to fetch weather data");
  }
};

module.exports = getWeatherData;
