import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
//import WeatherApp from './components/WeatherApp';
export const WeatherIcons = {
  "01d": "/icons/sunny.png",
  "01n": "/icons/night.png",
  "02d": "/icons/sunny.png",
  "02n": "/icons/cloudy-night.png",
  "03d": "/icons/cloudy.png",
  "03n": "/icons/cloudy.png",
  "04d": "/icons/perfect-day.png",
  "04n": "/icons/cloudy-night.png",
  "09d": "/icons/rain.png",
  "09n": "/icons/rain-night.png",
  "10d": "/icons/rain.png",
  "10n": "/icons/rain-night.png",
  "11d": "/icons/storm.png",
  "11n": "/icons/storm.png",
  "13n": "/icons/snow.png",
  "50n": "/icons/haze.png",
};


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [switcher, setSwitcher] = useState(false)
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
    );
    updateWeather(response.data);
  };
  
  return (
    <div className={`body flex flex-col justify-center text-white bg-slate-800 w-full h-full px-16 py-9  capitalize`}>
    <div className="w-full mb-8">
        <h1 className="text text-center text-2xl">current weather</h1>
      </div>
      <Inputs updateCity={updateCity} UpdateWeather={fetchWeather} />
      {weather &&   
        <Forcast weather={weather} city={city} />
      } 
        
      
    </div>
  );
}

export default App;
