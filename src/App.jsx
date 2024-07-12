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
        <div className="min-h-screen flex items-center justify-center bg-dark">
            <div className="bg-dark-card text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6">Weather App</h1>
                {token ? (
                    <>
                        <WeatherDisplay token={token} />
                        <button
                            onClick={handleLogout}
                            className="mt-4 w-full bg-accent text-white py-2 rounded hover:bg-accent-light transition duration-300"
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
