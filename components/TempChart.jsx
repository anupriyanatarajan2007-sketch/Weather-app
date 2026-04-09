import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
  } from "recharts";


function TempChart({data}){
   
    return(
 
         <div>
                  <LineChart width={650} height={350} data={data}
                  style={{background:"rgba(200, 198, 198, 0.22)",marginLeft:"20px",borderRadius:"20px"}}
                  >
                    
                    <CartesianGrid strokeDasharray="3 3" stroke="hide"/>
              
                    {/* X axis = hours */}
                    <XAxis dataKey="hour" />
              
                    {/* Y axis = temperature */}
                    <YAxis hide/>
              
                    <Tooltip />
              
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#c8c7c9"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
                    />
                  </LineChart>             

        </div>
    )

}

export default TempChart;