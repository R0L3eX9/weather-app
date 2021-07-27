import React from 'react';
import Icon from './Icon';
import './TodayWeather.css';

const TodayWeather = ({date, temperature}) => {
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
        <p className="status">Rainy</p>
        <Icon weather="rainy" size="4rem" />
      </div>
    </div>
  );
};

export default TodayWeather;
