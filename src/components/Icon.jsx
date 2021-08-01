import React from 'react';
import { 
  WiThunderstorm,
  WiLightning,
  WiSnowWind,
  WiRain,
  WiCloudyGusts,
  WiCloudyWindy,
  WiDaySunny,
  WiCloudy,
  WiCloudRefresh
} from 'react-icons/wi';

const Icon = ({weather, size}) => {
  const ThunderstormVariations = [
    'thunderstorm with light rain',
    'thunderstorm with rain',
    'thunderstorm with heavy rain'
  ];

  const LightningVariations = [
    'thunderstorm with light drizzle',
    'thunderstorm with drizzle',
    'thunderstorm with heavy drizzle',
    'thunderstorm with Hail'
  ];

  const SnowVariations = [
    'light drizzle',
    'drizzle',
    'heavy drizzle',
    'light snow',
    'snow',
    'heavy snow',
    'mix snow/rain',
    'snow shower',
    'heavy snow shower',
    'flurries'

  ];
  const RainVariations = [
    'light rain',
    'moderate rain',
    'heavy rain',
    'freezing rain',
    'light shower rain',
    'shower rain',
    'heavy shower rain'
  ];
  const GustsVariations = [
    'sleet',
    'heavy sleet',
  ];
  const WindyVariations = [
    'mist',
    'smoke',
    'haze',
    'sand/dust',
    'fog',
    'freezing Fog',
  ];
  const CloudyVariations = [
    'few clouds',
    'scattered clouds',
    'broken clouds',
    'overcast clouds',
  ];
  weather = weather.toLowerCase();
  if(weather === 'clear sky') {
    return <WiDaySunny size={size} color="#ffcb1f" />
  }
  if(ThunderstormVariations.includes(weather)) {
    return <WiThunderstorm size={size} color="#1771d1" />
  }
  if(LightningVariations.includes(weather)) {
    return <WiLightning size={size} color="#FDB813" />
  }
  if(SnowVariations.includes(weather)) {
    return <WiSnowWind size={size} color="#00a2ff" />
  }
  if(RainVariations.includes(weather)) {
    return <WiRain size={size} color="#19b4f7" />
  }
  if(GustsVariations.includes(weather)) {
    return <WiCloudyGusts size={size}/>
  }
  if(WindyVariations.includes(weather)) {
    return <WiCloudyWindy size={size}/>
  }
  if(CloudyVariations.includes(weather)) {
    return <WiCloudy size={size}/>
  }
  return <WiCloudRefresh size={size}/>
}

export default Icon;
