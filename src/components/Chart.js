import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

export default function Chart({ chartData, legendPosition }) {
  const [data, setData] = useState(chartData);
  const [lPosition, setLPosition] = useState(legendPosition);

  const displayTitle = true;
  const displayLegend = true;

  return (
    <div className="chart">
      <Bar
        data={data}
        options={{
          title: {
            display: displayTitle,
            text: "População das cidades do RS",
            fontSize: 25,
          },
          legend: {
            display: displayLegend,
            position: lPosition,
          },
        }}
      />
    </div>
  );
}
