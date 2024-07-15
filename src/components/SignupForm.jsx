import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('/api/signup', { username, email, password });
      console.log('Signup successful:', response.data);
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error signing up', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 text-center text-white">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-700 text-white focus:outline-none focus:border-accent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-700 text-white focus:outline-none focus:border-accent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-700 text-white focus:outline-none focus:border-accent"
          />
        </div>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-accent text-white py-2 rounded hover:bg-accent-light transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-center mt-4 text-white">
          Already have an account??? <Link to="/login" className="text-accent">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
