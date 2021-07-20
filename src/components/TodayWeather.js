import React from 'react';
import { IoRainyOutline } from 'react-icons/io5';
import Icon from './Icon';
import './TodayWeather.css';

const TodayWeather = () => {
  return (
    <div className="today-weather">
      <div className="today-stats">
        <p className="today-date">Tuesday 29th - 2021</p>
        <p className="temperature">
          15
          <span>&#176;</span>
        </p>
      </div>
      <div className="icon">
        <p className="status">Rainy</p>
        <Icon weather="rainy" size="5rem" />
      </div>
    </div>
  );
};

export default TodayWeather;
