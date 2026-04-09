import React from "react";
import './CityCard.css'
import cloudy from '../assets/cloudy.avif';
import Fog from '../assets/Fog.webp';
import rainShower from '../assets/rain-shower.jpg'
import rain from '../assets/rain.jpg'
import snow from '../assets/snow.jpg'
import sunny from '../assets/sunny.webp'
import thunderstorm from '../assets/Thunderstorm.jpg'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.jpg'
import visibility from '../assets/visibility.png'
import pressure from '../assets/pressure.webp'
import sunsets from '../assets/sunset.jpg'
import Chart from "./Chart";

function CityCard({city,data,rainData,windData}){
    
    const weatherId=city?.weather?.[0].id;
    console.log("RAIN DATA:", rainData);

    let img;

    if(weatherId>=200  && weatherId<=299){
         img=thunderstorm;
    }
    else if(weatherId>=300 && weatherId<=399){
        img=rainShower;
    }
    else if(weatherId>=500 && weatherId<=599){
        img=rain;
    }
    else if(weatherId>=600 && weatherId<=699){
        img=snow;
    }
    else if(weatherId>=700 && weatherId<=799){
        img=Fog;
    }
    else if(weatherId===800){
        img=sunny;
    }
    else if(weatherId>=801 && weatherId<=804){
        img=cloudy;
    }
    

    const sunrise = new Date(city?.sys?.sunrise * 1000);
    const sunset = new Date(city?.sys?.sunset * 1000);
    
     return(
       
        <div className="container">
       <div className="card-container">
        <div className="img-container">
        <img src={img} alt="weather"/>


        <div>
        <h1 className="temp">{Math.round(city?.main?.temp)}°</h1>    
        </div>
        </div>
       <div className="box-container">
        <div className="box">
            <div>
            <img src={wind} alt="wind"/>
            </div>
            <div>
            <h4>Wind</h4>
            <p>{city?.wind?.speed} m/s</p>
            </div>
        </div>

        <div className="box">
            <div>
            <img src={humidity} alt="humidity"/>
            </div>
            <div>
            <h4>Humidity</h4>
            <p>{city?.main?.humidity} %</p>
            </div>
        </div>
        <div className="box">
        <div>
            <img src={visibility} alt="visibility"/>
            </div>
            <div>
            <h4>Visibility</h4>
            <p>{city?.visibility} m</p>
            </div>
            
        </div>
        </div>

        <div className="box-container box-below">
        <div className="box">
            <div>
           <img src={pressure} alt="pressure"/>
            </div>
            <div>
            <h4>Pressure</h4>
            <p>{city?.main?.pressure} hPa</p>
            </div>
        </div>
        <div className="box">
        <div>
           <img src={sunsets} alt="sunrise"/>
            </div>
            <div>
            <h4>Sunrise</h4>
            <p>{sunrise.toLocaleTimeString(
                "en-IN",{
                    hour:"2-digit",
                    minute:"2-digit"
                }
            )}</p>
            </div>
        </div>
        <div className="box">
        <div>
           <img src={sunsets} alt="pressure"/>
            </div>
            <div>
            <h4>Sunset</h4>
            <p>{sunset.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  })}
</p>
            </div>
        </div>
        </div>
       </div>

       <div className="graph-container">
        <Chart data={data} rainData={rainData}
        windData={windData}/>
       </div>
       </div>
     )
}

export default CityCard;