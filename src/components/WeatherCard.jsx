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
      {/* {weather !== null ? console.log(weather.data):console.log(null)} */}
      <div className="weather-card">
        <div className="weather-record">
          <TodayWeather
            temperature={weather === null ? '-' : Math.ceil(weather.data[0].temp)}
            weather={weather === null ? "unknown": weather.data[0].weather.description}
            date={weather === null ? "unknown" : weather.data[0].datetime}
          />
          <div className="weekly">
            <WeeklyWeather 
              day={weather === null ? "sun":"wed"}
              weather={weather === null ? "unknown": weather.data[1].weather.description}
              temperature={weather === null ? '-' : Math.ceil(weather.data[1].temp)}
            />
            <WeeklyWeather 
              day={weather === null ? "sun":"thu"}
              weather={weather === null ? "unknown": weather.data[2].weather.description}
              temperature={weather === null ? '-' : Math.ceil(weather.data[2].temp)}
            />
            <WeeklyWeather 
              day={weather === null ? "sun":"fri"}
              weather={weather === null ? "unknown": weather.data[3].weather.description}
              temperature={weather === null ? '-' : Math.ceil(weather.data[3].temp)}  
            />
            <WeeklyWeather 
              day={weather === null ? "sun":"sat"}
              weather={weather === null ? "unknown": weather.data[4].weather.description}
              temperature={weather === null ? '-' : Math.ceil(weather.data[4].temp)}
            />
            <WeeklyWeather 
              day={weather === null ? "sun":"sun"}
              weather={weather === null ? "unknown": weather.data[5].weather.description}
              temperature={weather === null ? '-' : Math.ceil(weather.data[5].temp)}
            />
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
