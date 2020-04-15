import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";

export default function Chart({ chartData, legendPosition }) {
  const [data] = useState(chartData);
  const [lPosition] = useState(legendPosition);

  const displayTitle = true;
  const displayLegend = true;

  return (
    <div className="Dchart">
      <Doughnut
        height={500}
        width={500}
        data={data}
        options={{
          title: {
            display: displayTitle,
            text: "Total de casos no Brasil",
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
