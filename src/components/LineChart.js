import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function Chart({ chartData, legendPosition, uf }) {
  const [data, setData] = useState(chartData);
  const [lPosition, setLPosition] = useState(legendPosition);

  const displayTitle = true;
  const displayLegend = true;

  return (
    <div className="chart">
      <Line
        height={100}
        data={data}
        options={{
          title: {
            display: displayTitle,
            text: `Corona no estado ${uf}`,
            fontSize: 25,
          },
          legend: {
            display: displayLegend,
            position: lPosition,
          },
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
