// src/App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import WeatherApp from './components/WeatherDisplay';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<SignupForm setToken={setToken} />} />
          <Route path="/login" element={<LoginForm setToken={setToken} />} />
          <Route path="/weather" element={token ? <WeatherApp token={token} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
