import React, { createContext,  useEffect, useState } from "react";

 export const LocationContext=createContext();

function LocationProvider({children}) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState("");

  const [city,setCity]=useState(null);

  const apiKey = "fd51c10e6253086caf80cbe10266124e";

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch weather");
            }
            return res.json();
          })
          .then((data) => {
            console.log("WEATHER API DATA:", data);
            setCurrentLocation(data);
          })
          .catch((err) => {
            setError(err.message);
          });
      },
      (err) => {
        setError("Location permission denied ❌");
      }
    );
  }, []);


  const searchWeather=(city)=>{
        
    if(!city && city==="") return;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        .then((res)=>res.json())
        .then((data)=>{
            setCity(data);
        })
        .catch((err)=>{
            setError(err.message);
        });
  }

  return(
    <LocationContext.Provider
    value={{currentLocation,setCurrentLocation,
            error,searchWeather,city}}>
        {children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;