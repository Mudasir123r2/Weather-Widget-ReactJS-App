import SearchBox from "./SearchBox";
import DisplayInformation from "./DisplayInformation";
import "./WeatherApp.css";
import {useState} from "react";

export default function WeatherApp(){

    let [weather,setWeather]=useState({
        city:"Oymyakon",
        feelsLike : 5.03,
        temperature:6.64,
        minTemperature:6.64,
        maxTemperature:6.64,
        humidity: 88,
        weather: "light rain",
    })

    let updateInfo = (result)=>{
        setWeather(result);
    }

    return (
        <div className="Weather-Container">
            <h1 style={{color:"RGB(9, 92, 148)"}}>Weather App</h1>
            <SearchBox updateInformation={updateInfo}/>
            <DisplayInformation information={weather} />
        </div>
    );

}