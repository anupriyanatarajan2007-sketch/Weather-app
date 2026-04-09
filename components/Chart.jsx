import React, { useState } from "react";
import TempChart from "./TempChart";
import './Chart.css';
import Precipitation from "./Precipitation";
import WindChart from "./WindChart";
  function Chart({data,rainData,windData}) {
     
    const [show,setShow]=useState("temp");

    console.log("Wind dta:", windData);

    return (

      <div className="chart">
        <div className="btns">
        <button type="submit" onClick={()=>setShow("temp")} >Temperature</button>
        <button type="submit" onClick={()=>setShow("prec")}>Precipitation</button>
        <button type="submit" onClick={()=>setShow("wind")}>Wind</button>
        </div>

        <div className="graph">
        {show === "temp" ? (
          <TempChart data={data} />
        ) : show === "prec" ? (
          <Precipitation rainData={rainData} />
        ) : (
          <WindChart windData={windData}/>
        )}
        </div>
      </div>

    );
  }
  
  export default Chart;