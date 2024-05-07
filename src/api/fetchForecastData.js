import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const FORECAST_URL = process.env.REACT_APP_OPENWEATHERMAP_API_FORECAST_URL;

const fetchForecastData = async (cords) => {
  try {
    const response = await axios.get(
      `${FORECAST_URL}?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

export default fetchForecastData;