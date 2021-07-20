import React from 'react';
import { 
  IoPartlySunnyOutline, 
  IoRainyOutline,
  IoCloudyNightOutline,
  IoCloudyOutline,
  IoSunnyOutline,
  IoSnowOutline,
  IoAlertCircle
} from 'react-icons/io5';

const Icon = ({weather, size}) => {
  if(weather === 'partly-sunny') {
    return <IoPartlySunnyOutline size={size} color="yellow" />
  }
  if(weather === 'rainy') {
    return <IoRainyOutline size={size} color="#00c3ff" />
  }
  if(weather === 'cloudy-night') {
    return <IoCloudyNightOutline size={size} color="white" />
  }
  if(weather === 'cloudy') {
    return <IoCloudyOutline size={size} color="white" />
  }
  if(weather === 'sunny') {
    return <IoSunnyOutline size={size} color="yellow" />
  }
  if(weather === 'snowy') {
    return <IoSnowOutline size={size} color="white" />
  }
  return <IoAlertCircle size="4rem" color="red" />
}

export default Icon;
