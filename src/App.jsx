import { useState } from 'react';
import LoginForm from './LoginForm';
import WeatherDisplay from './WeatherDisplay';
import './index.css';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleSetToken = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="bg-black bg-opacity-60 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6">Weather App</h1>
                {token ? (
                    <>
                        <WeatherDisplay token={token} />
                        <button
                            onClick={handleLogout}
                            className="mt-4 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded hover:from-red-600 hover:to-orange-600 transition duration-300"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <LoginForm setToken={handleSetToken} />
                )}
            </div>
        </div>
    );
}

export default App;
