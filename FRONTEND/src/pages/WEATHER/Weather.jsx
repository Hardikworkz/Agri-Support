import WeatherWidget from "./Header_weather/WeatherWidget";
import './Weather.css';
import WeatherInfo from "./Header_weather/WeatherInfo";

const Weather = () => {
  return (
    <div className="weather-page">
      <WeatherWidget/>
      <WeatherInfo />
    </div>
  )
}

export default Weather
