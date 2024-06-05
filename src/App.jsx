//import "dotenv/config";
import React from 'react';
import { useState, useEffect } from 'react';
import SearchField from './components/SearchField';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [weatherData, setWeatherData] = useState({
    temp: "",
    feels_like: "",
    city: "",
    humidity: "",
    wind_speed: "",
    weatherImg: ""
  });

console.log(weatherData)

  const [location, setLocation] = useState("");
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.trim() === "") return; // Skip if location is empty
        const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${location}`;
        const response = await fetch(`${BASE_URL}&appid=${API_KEY}`);
  
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404)
          const errorData = await response.json();
          console.error(`Error: ${errorData.message}`);
          throw new Error('City not found.'); 
        }
  
        const parsedData = await response.json();
        //console.log("Parsed data: ", parsedData);
        const { temp, feels_like, humidity } = parsedData.main;
  
        setWeatherData((prevState) => ({
          ...prevState,
          temp,
          feels_like,
          humidity,
          city: parsedData.name,
          wind_speed: parsedData.wind.speed,
          weatherImg: parsedData.weather[0].main,
        }));
      } catch (error) {
        alert(error) // Display an alert window
      }
    };
  
    fetchData();
  }, [location, API_KEY]);
  

  function searchLocation(value) {
    setLocation(value);
  }

  return (
    <div className='card'>
      <SearchField location={searchLocation}/>
      <Weather data={weatherData}/>
      <WeatherDetails details={weatherData}/>
    </div>
  )
}

export default App
