import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./Location";

export const ForecastContext=createContext();

function ForecastProvider({children}){

    const [forecast,setForecast]=useState([]);
    const{city,currentLocation}=useContext(LocationContext);
    const apiKey = "fd51c10e6253086caf80cbe10266124e";
    
    const cityName=city?.name || currentLocation?.name;
    
    useEffect(() => {

      if(!cityName) return;
         
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
          .then(res => res.json())
          .then(data => {
            setForecast(data.list||[]);
          });
      
      }, [cityName]);

      const chartData = forecast.map(item => ({
        hour: new Date(item.dt * 1000).getHours(),
        temp: Math.round(item.main.temp)
      }));

      const rainData=forecast.map(item=>({
        hour: new Date(item.dt * 1000).getHours(),
        rain: Math.round(item.rain?.["3h"]||0)
      }));

      const windData=forecast.map(item=>({
        hour: new Date(item.dt * 1000).getHours(),
        wind: Math.round(item.wind?.speed||0)
      }));

      console.log("Wind Data",windData)


      const groupedByDay=forecast.reduce((acc,item)=>{
        const date= item.dt_txt.split(" ")[0];

        if(!acc[date]) acc[date]=[];
        acc[date].push(item);

        return acc;
      },{});
      
      console.log("Group Day",groupedByDay)

      return (
        <ForecastContext.Provider
        value={{
          forecast,
  chartData,
  rainData,
  windData,
 
        }}>
            {children}
        </ForecastContext.Provider>
      );

}

export default ForecastProvider;