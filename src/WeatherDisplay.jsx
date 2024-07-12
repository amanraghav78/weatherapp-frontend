import { useState } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/weather/current/${location}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
      setError(`Error fetching weather data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-black bg-opacity-70 text-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2 bg-gray-800 text-white focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300"
        >
          Get Weather
        </button>
      </form>

      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {weatherData && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Weather in {weatherData.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather icon"
            className="w-20 h-20 mx-auto"
          />
          <p className="text-lg">Temperature: {weatherData.main.temp} °C</p>
          <p className="text-lg">Weather: {weatherData.weather[0].description}</p>
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className="text-lg">Cloudiness: {weatherData.clouds.all}%</p>
          <p className="text-lg">Pressure: {weatherData.main.pressure} hPa</p>
          <p className="text-lg">Visibility: {weatherData.visibility} meters</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
