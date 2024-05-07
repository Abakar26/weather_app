import axios from 'axios';
import fetchForecastData from '../api/fetchForecastData';

jest.mock('axios');

describe('fetchForecastData function', () => {
  const mockCords = { lat: 31.1156, lon: 74.4467 };
  const mockData = {
    coord: { lon: 74.4467, lat: 31.1156 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
    main: { temp: 37.06, humidity: 12 },
    sys: { country: 'PK' }
  };

  it('fetches forecast data successfully', async () => {
    // Mock successful API response
    axios.get.mockResolvedValueOnce({ data: mockData });

    const data = await fetchForecastData(mockCords);

    expect(data).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_OPENWEATHERMAP_API_FORECAST_URL}?lat=${mockCords.lat}&lon=${mockCords.lon}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    );
  });

  it('throws an error when fetching forecast data fails', async () => {
    // Mock API call failure
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchForecastData(mockCords)).rejects.toThrow('Error fetching weather data');
  });
});
