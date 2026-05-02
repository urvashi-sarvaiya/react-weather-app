import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import {useState} from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bhavnagar",
    humidity: 42.31,
    temp: 40.02,
    tempMax: 40.02,
    tempMin: 40.02,
    weather: "clear sky",
  });
  let updateInfo = (newInfo) =>
  {
    setWeatherInfo(newInfo)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>WEATHER APP BY URVASHI</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
