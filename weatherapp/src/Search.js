import React, { useState } from 'react';

function Search({ onSearch }) {
  const [location, setLocation] = useState('');
  //const [weatherData, setWeatherData] = useState(null);


  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform the search and call the callback function with the search data
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${location}&KEY=7ac52f95aa51401b88440523230206`);
      const data = await response.json();
      //setWeatherData(data);
      // Call the `onSearch` function passed as a prop to pass the data to the parent component
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      
    <form onSubmit={handleSubmit} class="d-flex" role="search">
      <input type="text" class="form-control me-2" value={location} onChange={handleChange} placeholder="Enter location" />
      <button class="btn btn-outline-success" type="submit">Search</button>

    </form>   
         
    </div>
    



  );
}

export default Search;
