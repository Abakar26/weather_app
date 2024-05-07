import React, { useState } from 'react';
import fetchWeatherData from "../api/fetchWeatherData";
import fetchForecastData from "../api/fetchForecastData";
import Loader from "../ui/loader";
import ForecastComponent from "./forecastComponent";

function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cityCoords, setCityCoords] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingForecast, setLoadingForecast] = useState(false);
  const [errorForecast, setErrorForecast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWeather(null);
    setCityCoords(null);
    setForecast(null);

    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setCityCoords({ lat: data.coord.lat, lon: data.coord.lon });
    } catch (error) {
      setWeather(null);
      setCityCoords(null);
      setForecast(null);
      setError('City not found');
    }

    setLoading(false);
  };

  const handleFetchForecast = async () => {
    setLoadingForecast(true);
    setError(null);
    setForecast(null);

    try {
      const forecastData = await fetchForecastData(cityCoords);
      setForecast(forecastData.list);
    } catch (error) {
      setErrorForecast('Error fetching forecast data');
    }

    setLoadingForecast(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-[35rem]">
        <h1 className="text-3xl font-semibold mb-4 text-center">Weather App</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
            Search
          </button>
        </form>
        {loading && <div className="flex justify-center"><Loader /></div>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {weather && (
          <div>
            <h2 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h2>
            <div className="flex items-center mt-4">
              <div className="flex-1">
                <p className="text-lg">Description: <span className="font-semibold">{weather.weather[0].description}</span>
                </p>
                <p className="text-lg">
                  Temperature: <span className="font-semibold">{weather.main.temp}°C</span>
                </p>
                <p className="text-lg">
                  Humidity: <span className="font-semibold">{weather.main.humidity}%</span>
                </p>
                <button onClick={handleFetchForecast} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
                  Fetch Forecast
                </button>
                {loadingForecast && <div className="flex justify-center"><Loader /></div>}
                {errorForecast && <p className="text-center text-red-500">{errorForecast}</p>}
                {forecast && (<ForecastComponent forecast={forecast} />)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherComponent;
