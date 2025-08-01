import { useEffect, useState } from "react";
import axios from "axios";
import "./Location.css";
import LandAcknowledgement from "../LandAcknowledgement/LandAcknowledgement";

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [indigenousLands, setIndigenousLands] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({
    location: false,
    city: false,
    lands: false
  });

  // Function to fetch Indigenous Land information
  const fetchIndigenousLands = async (latitude, longitude) => {
    setLoading(prev => ({...prev, lands: true}));
    try {
      const response = await axios.get(
        `https://native-land.ca/api/index.php`, {
          params: {
            maps: 'territories',
            position: `${latitude},${longitude}`,
            key: process.env.REACT_APP_NATIVE_LAND_API_KEY
          }
        }
      );
      
      console.log("Indigenous Land data:", response.data);
      
      if (response.data) {
        setIndigenousLands(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        setIndigenousLands([]);
        console.warn("No Indigenous Land data found for this location.");
      }
    } catch (error) {
      console.error("Error fetching Indigenous Land data:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      setIndigenousLands([]);
      setError("Could not load Indigenous land data. Using sample data.");
      
      // Fallback sample data
      setIndigenousLands([{
        properties: {
          Name: "Coast Salish",
          Description: "Traditional territory"
        }
      }]);
    } finally {
      setLoading(prev => ({...prev, lands: false}));
    }
  };

  // Function to fetch city information
  const fetchCityData = async (latitude, longitude) => {
    setLoading(prev => ({...prev, city: true}));
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            q: `${latitude}+${longitude}`,
            key: process.env.REACT_APP_API_KEY,
            no_annotations: 1,
            limit: 1
          }
        }
      );

      const result = response.data.results[0];
      setCity(
        result?.components.city || 
        result?.components.town ||
        result?.components.village ||
        result?.components.county ||
        "This location"
      );
    } catch (error) {
      console.error("Error fetching city data:", error);
      setCity("This location");
    } finally {
      setLoading(prev => ({...prev, city: false}));
    }
  };

  useEffect(() => {
    const getLocation = () => {
      setLoading(prev => ({...prev, location: true}));
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            fetchCityData(position.coords.latitude, position.coords.longitude);
            fetchIndigenousLands(position.coords.latitude, position.coords.longitude);
            setLoading(prev => ({...prev, location: false}));
          },
          (error) => {
            setError(error.message);
            // Fallback to default coordinates (Vancouver)
            const fallbackLat = 49.2827;
            const fallbackLon = -123.1207;
            setLatitude(fallbackLat);
            setLongitude(fallbackLon);
            fetchCityData(fallbackLat, fallbackLon);
            fetchIndigenousLands(fallbackLat, fallbackLon);
            setLoading(prev => ({...prev, location: false}));
          }
        );
      } else {
        setError("Geolocation is not supported in this browser.");
        // Fallback to default coordinates
        const fallbackLat = 49.2827;
        const fallbackLon = -123.1207;
        setLatitude(fallbackLat);
        setLongitude(fallbackLon);
        fetchCityData(fallbackLat, fallbackLon);
        fetchIndigenousLands(fallbackLat, fallbackLon);
        setLoading(prev => ({...prev, location: false}));
      }
    };

    getLocation();
  }, []);

  return (
    <section className="land">
      <div className="location">
        {loading.location ? (
          <div className="loading-spinner">Locating...</div>
        ) : error ? (
          <p className="alert alert-warning">{error}</p>
        ) : latitude && longitude ? (
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
                  <strong>City:</strong> {city || "Locating..."}
                </p>
              </div>
              <div className="land-acknowledgment-container">
                {loading.lands ? (
                  <div className="loading-spinner">Loading land acknowledgment...</div>
                ) : (
                  <LandAcknowledgement indigenousLands={indigenousLands} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading location...</p>
        )}
      </div>
    </section>
  );
};

export default Location;