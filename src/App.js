import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/form';
import WeatherInfo from './components/weatherinfo';

const API_KEY = 'bc9224fdce502746f2c87f9e7187058b';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city, country) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Погода</h1>
      <WeatherForm onSearch={handleSearch} />
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;
