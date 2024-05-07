import { formatDate } from "../utils/dateFormat";
function ForecastComponent({ forecast }) {

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Forecast:</h3>
      <div className="flex flex-wrap gap-4">
        {forecast.map(day => (
          <div key={day.dt} className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">Date: {formatDate(day.dt_txt)}</p>
            <p className="text-gray-600">Min: {day.main.temp_min}°C</p>
            <p className="text-gray-600">Max: {day.main.temp_max}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastComponent;
