import { useState } from "react";
import { cityList } from "../Data/cities,jsx";

function SearchBox({ city, setCity, fetchWeather }) {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = cityList
        .filter((c) => c.toLowerCase().startsWith(value.toLowerCase()))
        .slice(0, 10);
      setSuggestions(filtered);
    }
  };

  const handleSelect = (selectedCity) => {
    setCity(selectedCity);
    setSuggestions([]);
    fetchWeather();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={handleChange}
        style={{
          padding: "8px",
          width: "200px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={fetchWeather}
        style={{
          marginLeft: "8px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "5px",
            position: "absolute",
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "200px",
            borderRadius: "4px",
            zIndex: 100,
            textAlign: "left",
          }}
        >
          {suggestions.map((s, index) => (
            <li
              key={index}
              onClick={() => handleSelect(s)}
              style={{
                padding: "5px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.background = "white")}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
