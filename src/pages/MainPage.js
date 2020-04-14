import React, { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import TotalStats from "../components/TotalStats";
import "./MainPage.css";
import api from "../services/api";

export default function MainPage() {
  const [chartData, setCharData] = useState({});
  const [isBusy, setBusy] = useState(true);

  //Doughnut
  const [loadingDoughnut, setLoadingDoughnut] = useState(true);
  const [doughnutData, setDoughnutData] = useState({});

  //UF
  const [value, setValue] = useState("");

  useEffect(() => {
    chartDoughnut();
  }, []);

  async function getDoughnutData() {
    const data = await api.get(
      "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
    );

    const obj = {
      cases: data.data.data.confirmed,
      deaths: data.data.data.deaths,
      recovers: data.data.data.recovered,
      total: data.data.data.confirmed,
    };
    return obj;
  }

  async function chartDoughnut() {
    const obj = await getDoughnutData();

    setDoughnutData({
      labels: [`Recuperados`, `Confirmados`, `Mortes`],
      datasets: [
        {
          label: "Casos",
          data: [obj.recovers, obj.cases, obj.deaths],
          backgroundColor: ["#37ab37", "#4952ff", "#ec5353"],
        },
      ],
    });
    setLoadingDoughnut(false);
  }

  return (
    <div className="MainPage">
      <h1 className="title">Covid-19</h1>
      <TotalStats />
      <LineChart />
      {loadingDoughnut ? (
        <p>Loading</p>
      ) : (
        <DoughnutChart chartData={doughnutData} legendPosition="top" />
      )}
    </div>
  );
}
