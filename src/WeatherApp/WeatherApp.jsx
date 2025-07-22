import React, { lazy, Suspense, useEffect, useState } from 'react';
import './WeatherApp.css';

const WeatherShow = lazy(() => import('./WeatherShow'));

const WeatherApp = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('Bangalore');
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false)

    const fetchWeather = async (city) => {
        try {
            setloading(true)
            const res = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=d07bef141e5b4c9e9a9142825252207&q=${city}`
            );
            const data = await res.json();
            if (!res.ok) throw new Error('Failed to fetch weather data');
            setWeather(data);
            setError('');
            setloading(false)
        } catch (err) {
            setError(err.message);
        }
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (city) fetchWeather(city);
        }, 800);
        return () => clearTimeout(timer);
    }, [city]);

    useEffect(() => {
        fetchWeather(city);
    }, []);

    return (
        <div className="full_container">
            <h1>🌦️ Weather App</h1>
            {!error && loading && <h2 style={{color:'#512da8'}}>Loading...</h2>}
            {!error && !loading && (
                <Suspense fallback={<h1 style={{color:'#512da8'}}>Loading weather...</h1>}>
                    <WeatherShow weather={weather} />
                </Suspense>
            )}
            {error && <p className="error">{error}</p>}
            <div className="container1">
                <form>
                    <label htmlFor="city">Enter City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={handleChange}
                        placeholder="Enter City e.g. Delhi"
                    />
                </form>
            </div>
        </div>
    );
};

export default WeatherApp;
