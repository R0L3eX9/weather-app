import React from 'react';
import Icon from './Icon';
import './TodayWeather.css';

const TodayWeather = ({date, weather, temperature}) => {
  return (
    <div className="today-weather">
      <div className="today-stats">
        <p className="today-date">{date}</p>
        <p className="temperature">
          {temperature}
          <span>&#176;</span>
        </p>
      </div>
      <div className="icon">
        <p className="status">{weather}</p>
        <Icon weather={weather} size="5rem" />
      </div>
    </div>
  );
};

export default TodayWeather;
