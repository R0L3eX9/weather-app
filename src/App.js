import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard.jsx';

export const WeatherContext = React.createContext();

const App = () => {
  return (
    <div className="App">
        <WeatherCard />
    </div>
  );
};

export default App;
