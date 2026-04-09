import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function WindChart({ windData }) {

  return (
    <div
      style={{
        width: "650px",
        height: "350px",
        background: "#f5f5f5",
        borderRadius: "20px",
        marginLeft:"20px"
      }}
    >
      <ResponsiveContainer>
        <AreaChart data={windData || []}>

          {/* 🌈 Gradient */}
          <defs>
            <linearGradient id="windColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
            </linearGradient>
          </defs>

          {/* Clean UI */}
          <CartesianGrid stroke="none" />

          {/* X Axis */}
          <XAxis dataKey="hour" tick={{ fill: "#888" }} />

          {/* Hide Y Axis */}
          <YAxis hide />

          {/* Tooltip */}
          <Tooltip />

          {/* 💨 Wind Area */}
          <Area
            type="monotone"
            dataKey="wind"
            stroke="#8884d8"
            strokeWidth={3}
            fill="url(#windColor)"
            isAnimationActive={true}
            animationDuration={1500}
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WindChart;