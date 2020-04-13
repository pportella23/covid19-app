import React, { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import "./MainPage.css";

export default function MainPage() {
  const [chartData, setCharData] = useState({});
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    getChartData();
  }, []);

  function getChartData() {
    // Ajax calls go here! (Aqui que vão as requisições pra API que vão buscar os dados do COVID)
    setCharData({
      labels: ["Porto Alegre", "Alegrete", "Canoas", "Novo Hamburgo"],
      datasets: [
        {
          label: "População",
          data: [1409000, 78984, 323827, 246452],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
          ],
        },
      ],
    });

    setBusy(false);
  }

  return (
    <div className="MainPage">
      <h1 className="title">Covid-19</h1>
      <div className="cases">
        <p>Total de casos</p>
        <p>Total de obitos</p>
      </div>
      {isBusy ? (
        <p>Loading</p>
      ) : (
        <div className="charts">
          <LineChart chartData={chartData} legendPosition="top" />
          <DoughnutChart chartData={chartData} legendPosition="top" />
        </div>
      )}
    </div>
  );
}
