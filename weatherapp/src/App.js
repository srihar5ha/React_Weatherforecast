// App.js
import React,{useState}from 'react';
import Header from './Header';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <Header/>
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      
    </div>
  );
}

export default App;
