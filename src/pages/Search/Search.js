import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { apiKey } from "../../config.js";

const Search = () => {
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState(null);
  const [indigenousLands, setIndigenousLands] = useState([]);

  const handleCityInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const cityResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          inputCity
        )}&key=${apiKey}`
      );

      if (cityResponse.data.results.length > 0) {
        const { lat, lng } = cityResponse.data.results[0].geometry;

        const indigenousLandResponse = await axios.get(
          `https://native-land.ca/api/index.php?maps=territories&position=${lat},${lng}`
        );

        setError(null);
        setIndigenousLands(indigenousLandResponse.data);
      } else {
        setError("City data not found");
        setIndigenousLands([]);
      }
    } catch (error) {
      console.error("Error fetching city and indigenous land data:", error);
      setError("An error occurred while fetching data.");
      setIndigenousLands([]);
    }
  };

  return (
    <div className='search'>
    <div className="search-page">
      <h1 className="page-title">Search for Indigenous Lands</h1>
      <div className="city-search">
        <input
          type="text"
          placeholder="Enter a city"
          value={inputCity}
          onChange={handleCityInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {indigenousLands.length > 0 && (
        <div className="indigenous-lands">
          <h2>Indigenous Lands of {inputCity}</h2>
          <ul>
            {indigenousLands.map((land) => (
              <li key={land.properties.Name}>{land.properties.Name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Search;