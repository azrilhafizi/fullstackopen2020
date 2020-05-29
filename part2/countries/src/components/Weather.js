import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((res) => {
        console.log(res.data.current);
        setWeather(res.data.current);
      });
  }, []);

  return (
    <div>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celcius
      </p>
      <img src={weather.weather_icons} height="100" width="100" />
      <p>
        <strong>wind:</strong> {weather.wind_speed} mph direction{" "}
        {weather.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
