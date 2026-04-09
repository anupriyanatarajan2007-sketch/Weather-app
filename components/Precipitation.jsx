import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
  } from "recharts";
function Precipitation({rainData}){

    return(
    <div
      style={{
        width: "650px",
        height: "350px",
        background: "#f5f5f5"
      }}
    >
      <ResponsiveContainer>
        <BarChart data={rainData || []}>

          {/* Clean grid */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X axis (time) */}
          <XAxis dataKey="hour" tick={{ fill: "#888" }} />

          {/* Y axis (rain mm) */}
          <YAxis hide/>

          {/* Tooltip */}
          <Tooltip />

          {/* Bars */}
          <Bar
            dataKey="rain"
            fill="#4da6ff"
            radius={[6, 6, 0, 0]}   // rounded top
            isAnimationActive={true}
            animationDuration={1500}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default Precipitation;