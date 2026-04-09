import React from "react";
import LocationProvider from "./components/Location";
import Weather from "./page/Weather";
import ForecastProvider from "./components/Forecast";
function App(){

  return(
   
    <LocationProvider>
      <ForecastProvider>
      <Weather/>
      </ForecastProvider>
    </LocationProvider>

  )

}

export default App;