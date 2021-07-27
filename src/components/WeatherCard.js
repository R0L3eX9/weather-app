import React, { useState} from 'react';
import './WeatherCard.css';
import TodayWeather from './TodayWeather';
import WeeklyWeather from './WeeklyWeather';
import { IoMdPaperPlane } from 'react-icons/io';
import Form from './Form';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  return (
    <>
      <Form dataSetter={setWeather} />
      {weather !== null ? console.log(weather.data):console.log(null)}
      <div className="weather-card">
        <div className="weather-record">
          <TodayWeather
            temperature={weather === null ? '-' : Math.ceil(weather.data[0].temp)}
            date={weather === null ? "unknown":weather.data[0].datetime}
          />
          <div className="weekly">
            <WeeklyWeather day="wed" weather="partly-sunny" temperature={weather === null ? '-' : Math.ceil(weather.data[1].temp)} />
            <WeeklyWeather day="thu" weather="rainy" temperature={weather === null ? '-' : Math.ceil(weather.data[2].temp)} />
            <WeeklyWeather day="fri" weather="sunny" temperature={weather === null ? '-' : Math.ceil(weather.data[3].temp)} />
            <WeeklyWeather day="sat" weather="cloudy" temperature={weather === null ? '-' : Math.ceil(weather.data[4].temp)} />
            <WeeklyWeather day="sun" weather="rainy" temperature={weather === null ? '-' : Math.ceil(weather.data[5].temp)} />
          </div>
        </div>
        <div className="location">
          <IoMdPaperPlane size="2rem" />
          <p className="location-name">
            {weather === null ? `N/A` : `${weather.city_name}, ${weather.country_code}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
