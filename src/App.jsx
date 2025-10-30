import { useState } from "react";
import SearchBox from "./components/SearchBox.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "c1cf4aa003a98ea3ca3d8d20ca3f32eb";

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch(err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🌦️ Weather App</h1>

      <SearchBox city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
