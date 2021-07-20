import React from 'react';
import './WeeklyWeather.css';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import Icon from './Icon';

const WeeklyWeather = ({day, weather, temperature}) => {
  return (
    <div className="weekly-weather">
      <div className="weekly-stats">
        <p className="day-name">{ day }</p>
        <Icon weather={weather} size="4rem" />
        <p className="weekly-temperature"><span>{ temperature }&#176;</span></p>
      </div>
    </div>
  );
};

export default WeeklyWeather;
