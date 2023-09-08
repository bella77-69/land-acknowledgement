import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Location.css";
import LandAcknowledgement from "../LandAcknowledgement/LandAcknowledgement";
const apiKey = process.env.REACT_APP_API_KEY;

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [indigenousLands, setIndigenousLands] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch Indigenous Land information using the Native Land API.
  const fetchIndigenousLands = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://native-land.ca/api/index.php?maps=territories&position=${latitude},${longitude}`
      );
      // Handle the response and set the state with the Indigenous Land data.
      setIndigenousLands(response.data);
    } catch (error) {
      console.error("Error fetching Indigenous Land data:", error);
    }
  };

  // Function to fetch city information based on latitude and longitude using OpenCageData API.
  const fetchCityData = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
      );
      if (response.data.results.length > 0) {
        const city = response.data.results[0].components.city;
        setCity(city);
      } else {
        setCity("City data not found");
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success callback: position contains the user's location
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Fetch city information based on the user's location
          fetchCityData(position.coords.latitude, position.coords.longitude);

          // Fetch Indigenous Land information based on the user's location
          fetchIndigenousLands(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          // Error callback: handle the error if there's a problem fetching the location
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <section className="land">
      <div className="location">
        {latitude && longitude ? (
          <div className="content">
            <p className="location-heading">
              This page detects your current location and displays the
              coordinates. Additionally, the land acknowledgment section below
              helps you identify the traditional lands you are on, fostering
              awareness and respect.
            </p>

            <div className="box">
              <h2 className="location-title">Your Current Location:</h2>
              <div className="location-info">
                <p>
                  <strong>Latitude:</strong> {latitude}
                </p>
                <p>
                  <strong>Longitude:</strong> {longitude}
                </p>
                <p>
                  <strong>City:</strong> {city}
                </p>
              </div>
              <div className="land-acknowledgment-container">
                <LandAcknowledgement indigenousLands={indigenousLands} />
                
              </div>
            </div>
          </div>
        ) : error ? (
          <p className="alert alert-danger">Error: {error}</p>
        ) : (
          <p>Loading location...</p>
        )}
      </div>
    </section>
  );
};

export default Location;
