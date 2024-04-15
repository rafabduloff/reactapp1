import React from 'react';

const WeatherInfo = ({ data }) => {
  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Температура: {data.main.temp}°C</p>
      <p>Подробности: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
