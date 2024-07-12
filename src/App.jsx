import React from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Weather App</h1>
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;
