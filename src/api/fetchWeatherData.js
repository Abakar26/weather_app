import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const API_URL = process.env.REACT_APP_OPENWEATHERMAP_API_URL;

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('City not found');
  }
};

export default fetchWeatherData;