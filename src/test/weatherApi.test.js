import axios from 'axios';
import fetchWeatherData from '../api/fetchWeatherData';

jest.mock('axios');

describe('fetchWeatherData function', () => {
  it('fetches weather data successfully', async () => {
    const mockResponse = {
      data: {
        coord: { lon: 74.4467, lat: 31.1156 },
        weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
        main: { temp: 37.06, humidity: 12 },
        sys: { country: 'PK' }
      }
    };

    axios.get.mockResolvedValueOnce(mockResponse);

    const data = await fetchWeatherData('Kasur');

    expect(data.coord.lon).toBe(74.4467);
    expect(data.coord.lat).toBe(31.1156);
    expect(data.weather[0].main).toBe('Clear');
    expect(data.weather[0].description).toBe('clear sky');
    expect(data.main.temp).toBe(37.06);
    expect(data.main.humidity).toBe(12);
    expect(data.sys.country).toBe('PK');
  });

  it('throws an error when city is not found', async () => {
    axios.get.mockRejectedValueOnce(new Error('City not found'));

    await expect(fetchWeatherData('UnknownCity')).rejects.toThrow('City not found');
  });
});
