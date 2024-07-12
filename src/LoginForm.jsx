import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            setToken(response.data.token);
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-black bg-opacity-70 text-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-2 bg-gray-800 text-white focus:outline-none focus:border-purple-500"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-2 bg-gray-800 text-white focus:outline-none focus:border-purple-500"
                />
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300"
                >
                    Login
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
