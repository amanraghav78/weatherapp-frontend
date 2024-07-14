import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            setToken(response.data.token);
        } catch (error) {
            console.error('Error logging in', error);
            setError('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-800 text-white focus:outline-none focus:border-accent"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-800 text-white focus:outline-none focus:border-accent"
                />
            </div>
            {error && <p className="text-center text-red-500 mb-4">{error}</p>}
            <button
                type="submit"
                className="w-full bg-accent text-white py-2 rounded hover:bg-accent-light transition duration-300"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
