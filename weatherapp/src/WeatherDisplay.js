// WeatherDisplay.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherDisplay({weatherData}) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
  <div className="card">
    <div className="weather-box bg-light border rounded p-3 mb-3">
      <p className="weather-item">Location: {weatherData['location']['name']}</p>
      <p className="weather-item">Temperature: {weatherData['current']['temp_c']}</p>
      <p className="weather-item">Country: {weatherData['location']['country']}</p>
    </div>
  </div>
</div>

  );
}

export default WeatherDisplay;
