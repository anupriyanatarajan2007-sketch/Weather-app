import React, { useContext, useRef, useState} from "react";
import "./Weather.css";
import logo from '../assets/logo.png'
import location from '../assets/location.webp';
import { LocationContext } from "../components/Location";
import CityCard from "../components/CityCard";
import { ForecastContext } from "../components/Forecast";
function Weather() {
    
    const{currentLocation,searchWeather,city}=useContext(LocationContext);

    const{chartData,rainData,windData}=useContext(ForecastContext);
    
     const inputRef=useRef(null)
     
     const [isSearch,setIsSearch]=useState(false);

  return (
    <div className="weather-container">

      <div className="top">
        <div className="logo">
        <img src={logo} alt="logo"/>
        </div>
         
        <div className="top-text">
        <img src={location} alt="location"/>
        <h4>Current Location: {currentLocation?.name}</h4>
        </div>

      </div>

      <div className="header">
        <div className="left-side">
        <div className="text-container">
        <h1>Weather forecast</h1>
        </div>
        <div className="temp-container">
            <div className="celsius-container">
                °C
            </div>
            <div className="fahrenheit-container">
                °F
            </div>
        </div>
        </div>

        <div className="right-side">
            <form onSubmit={
              (e)=>{
                if(!city && city==="") return;
                e.preventDefault();
                searchWeather(inputRef.current.value);
                setIsSearch(true);
                inputRef.current.value = ""; // clear
              }
            }>
            <input
             name="city"
             ref={inputRef}
             placeholder="Search City..."/>

             <button type="submit">Search</button>
            </form>
            
        </div>
      </div>
      
      <div className="card">
        <CityCard city={isSearch ? city : currentLocation}
         data={chartData} rainData={rainData}
         windData={windData}/>
      </div>
      
    </div>
  );
}

export default Weather;