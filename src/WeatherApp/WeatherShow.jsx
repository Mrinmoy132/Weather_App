import React from 'react';

const WeatherShow = ({ weather }) => {
    return (
        <div className="weather-container">
            <div className="weather-tile">Country: <span>{weather?.location?.country}</span></div>
            <div className="weather-tile">State: <span>{weather?.location?.region || weather?.location?.country}</span></div>
            <div className="weather-tile">City: <span>{weather?.location?.name}</span></div>
            <div className="weather-tile">Weather: <span>{weather?.current?.condition?.text}</span></div>
            <div className="weather-tile">Temp: <span>{weather?.current?.temp_c} °C</span></div>
            <div className="weather-tile">Feels Like: <span>{weather?.current?.feelslike_c} °C</span></div>
            <div className="weather-tile">Humidity: <span>{weather?.current?.humidity}%</span></div>
            <div className="weather-tile">Wind: <span>{weather?.current?.wind_kph} km/h</span></div>
        </div>
    );
};

export default WeatherShow;