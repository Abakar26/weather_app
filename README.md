# Weather App

This Weather App utilizes the OpenWeatherMap API to fetch weather data based on city names. It allows users to search for weather information for a specific city and displays the current weather conditions, including temperature, description, and humidity.It also fetch the forecast for the next 5 Days and displays the time, temperature.

## Features
- **Search by City:** Users can search for weather information by entering the name of the city.
- **Current Weather Display:** The app displays the current weather conditions for the searched city, including temperature, description, and humidity.
- **Forecast Weather Display:** The app displays the next 5 Days forecast for the searched city, including temperature and time.
- **Error Handling:** Clear indication is provided if the city is not found or if there is an error fetching the data.
- **Loading States:** Appropriate loading states are included while data is being fetched.
- **Responsive Design:** The app is designed to be responsive across various devices and screen sizes.
- **Styling:** Styling is implemented using Tailwind CSS to make the app visually appealing.

## Technologies Used
- React.js
- Tailwind CSS
- OpenWeatherMap API

## Running the App
To run the app locally, follow these steps:
1. Clone this repository to your local machine `https://github.com/Abakar26/weather_app.git`.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. update a `.env` file in the root directory and add your OpenWeatherMap API key as follows:
   REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
5. Run the app using `npm start` or `yarn start`.
6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Running Tests
To run test suits, use the following command:
  `npm test`