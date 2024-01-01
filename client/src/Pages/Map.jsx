import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";

const MapComponent = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [schoolsForDisabled, setSchoolsForDisabled] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(currentLocation);
        fetchNearbyHospitals(currentLocation);
        fetchNearbyGardens(currentLocation);
        fetchNearbySchoolsForDisabled(currentLocation);
      });
    } else {
      // Handle geolocation not supported
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchNearbyHospitals = async (location) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/nearby-hospitals?lat=${location.lat}&lng=${location.lng}`
      );
      if (!response.data.error) {
        setHospitals(response.data);
      }
    } catch (error) {
      console.error("Error fetching nearby hospitals:", error);
    }
  };

  const fetchNearbyGardens = async (location) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/nearby-gardens?lat=${location.lat}&lng=${location.lng}`
      );
      if (!response.data.error) {
        setGardens(response.data);
      }
    } catch (error) {
      console.error("Error fetching nearby gardens:", error);
    }
  };

  const fetchNearbySchoolsForDisabled = async (location) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/nearby-schools-for-disabled?lat=${location.lat}&lng=${location.lng}`
      );
      if (!response.data.error) {
        setSchoolsForDisabled(response.data);
      }
    } catch (error) {
      console.error("Error fetching nearby schools for disabled:", error);
    }
  };

  return (
    <div>
      <h1>Nearby Hospitals, Gardens, and Schools for Disabled</h1>
      <div>
        <LoadScript
          googleMapsApiKey="AIzaSyDgOPsQmW2X07Q0b1W5yUWJa79dc6RRepA"
          onLoad={() => console.log("Google Maps loaded successfully")}
        >
          <GoogleMap mapContainerStyle={mapStyles} center={location} zoom={15}>
            {location && <Marker position={location} title="Your Location" />}
            
            {/* Markers for Hospitals */}
            {hospitals.map((hospital, index) => (
              <Marker
                key={index}
                position={{
                  lat: hospital.geometry.location.lat,
                  lng: hospital.geometry.location.lng,
                }}
                title={hospital.name}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                onClick={() => setSelectedPlace(hospital)}
              />
            ))}
            
            {/* Markers for Gardens */}
            {gardens.map((garden, index) => (
              <Marker
                key={index}
                position={{
                  lat: garden.geometry.location.lat,
                  lng: garden.geometry.location.lng,
                }}
                title={garden.name}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                onClick={() => setSelectedPlace(garden)}
              />
            ))}
            
            {/* Markers for Schools for Disabled */}
            {schoolsForDisabled.map((school, index) => (
              <Marker
                key={index}
                position={{
                  lat: school.geometry.location.lat,
                  lng: school.geometry.location.lng,
                }}
                title={school.name}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                onClick={() => setSelectedPlace(school)}
              />
            ))}

            {/* InfoWindow for Selected Place */}
            {selectedPlace && (
              <InfoWindow
                position={{
                  lat: selectedPlace.geometry.location.lat,
                  lng: selectedPlace.geometry.location.lng,
                }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div>
                  <h3>{selectedPlace.name}</h3>
                  <p>{selectedPlace.vicinity}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;
