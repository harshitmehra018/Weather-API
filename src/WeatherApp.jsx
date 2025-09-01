import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
const [weatherInfo, setWeatherInfo] = useState({   
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    temp_min: 25.05,
    temp_max: 25.05,
    humidity: 47,
    weather: "haze",
});

let updateInfo =(newInfo) =>{
    setWeatherInfo(newInfo);
}

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Harshit</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
