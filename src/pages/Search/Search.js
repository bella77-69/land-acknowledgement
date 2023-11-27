import React, { useState } from "react";
import "./Search.css";
const apiKey = process.env.REACT_APP_API_KEY;

const Search = () => {
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState(null);
  const [indigenousLands, setIndigenousLands] = useState([]);

  const handleCityInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const cityResponse = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(inputCity)}&key=${apiKey}`
      );
      const cityData = await cityResponse.json();

      if (cityData.results.length > 0) {
        const { lat, lng } = cityData.results[0].geometry;

        const indigenousLandResponse = await fetch(
          `https://native-land.ca/api/index.php?maps=territories&position=${lat},${lng}`
        );
        console.log("City data:", cityData); 
        console.log("Indigenous Land data:", indigenousLandResponse);
        const indigenousLandData = await indigenousLandResponse.json();
          
        setError(null);
        setIndigenousLands(indigenousLandData);
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
    <div className="search">
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