import React from 'react';
import './WeatherCard.css';
import TodayWeather from './TodayWeather';
import WeeklyWeather from './WeeklyWeather';

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="weather-record">
        <TodayWeather />
        <div className="weekly">
          <WeeklyWeather day="wed" weather="partly-sunny" temperature="25" />
          <WeeklyWeather day="thu" weather="rainy" temperature="18" />
          <WeeklyWeather day="fri" weather="snowy" temperature="2" />
          <WeeklyWeather day="sat" weather="partly-sunny" temperature="22" />
          <WeeklyWeather day="sun" weather="snowy" temperature="-5" />
        </div>
      </div>
      <div className="weather-img">
        {/* This is the name of the place */}
        <p>Romania, Bucuresti</p>
      </div>
    </div>
  );
};

export default WeatherCard;
