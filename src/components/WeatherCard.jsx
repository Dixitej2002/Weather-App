import React from "react";
import "./WeatherCard1.css";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    sys,
    main,
    weather: weatherInfo,
    wind,
  } = weather;

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="header">
          <h2>{name}, {sys.country}</h2>
          <p className="date">
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="main-info">
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@4x.png`}
            alt={weatherInfo[0].description}
          />
          <h1>{Math.round(main.temp)}°C</h1>
          <p className="desc">{weatherInfo[0].description}</p>
          <p className="feels">Feels like {Math.round(main.feels_like)}°C</p>
        </div>

        <div className="details-grid">
          <div className="detail">
            💧 <span>Humidity:</span> {main.humidity}%
          </div>
          <div className="detail">
            🌬️ <span>Wind:</span> {wind.speed} m/s
          </div>
          <div className="detail">
            ⏱️ <span>Pressure:</span> {main.pressure} hPa
          </div>
          <div className="detail">
            🌅 <span>Sunrise:</span> {formatTime(sys.sunrise)}
          </div>
          <div className="detail">
            🌇 <span>Sunset:</span> {formatTime(sys.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
}
