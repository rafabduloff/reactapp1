import React, { useState }  from "react";

const WeatherForm = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(city, country);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Получить данные о погоде</button>
      </form>
    );
  };

export default WeatherForm;