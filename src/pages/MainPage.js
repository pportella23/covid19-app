import React, { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import "./MainPage.css";
import api from "../services/api";

export default function MainPage() {
  const [chartData, setCharData] = useState({});
  const [isBusy, setBusy] = useState(true);
  const [countryCase, setCountryCase] = useState("");
  const [countryDeath, setCountryDeath] = useState("");

  useEffect(() => {
    getChartData();
    getCountryCases();
  }, []);

  async function getCountryCases() {
    const data = await api.get("/api/report/v1/brazil");
    const cases = data.data.data.confirmed;
    const deaths = data.data.data.deaths;
    setCountryCase(cases);
    setCountryDeath(deaths);
  }

  function formatDate(todaysDate) {
    let month = "";
    let day = "";
    let year = todaysDate.getFullYear();

    if (todaysDate.getMonth() + 1 < 10) {
      month = "0" + (todaysDate.getMonth() + 1);
    } else {
      month = todaysDate.getMonth() + 1;
    }
    if (todaysDate.getDate() - 1 < 10) {
      day = "0" + (todaysDate.getDate() - 1);
    } else {
      day = todaysDate.getDate() - 1;
    }

    return year + month + day;
  }

  async function getData() {
    let todaysDate = new Date();
    let days = 86400000;

    const dataWeek1 = await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 28 * days))}`
      )
    ).data.data;
    const dataWeek2 = await await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 21 * days))}`
      )
    ).data.data;
    const dataWeek3 = await await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 14 * days))}`
      )
    ).data.data;
    const dataWeek4 = await await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 7 * days))}`
      )
    ).data.data;
    const dataWeek5 = await (
      await api.get(`/api/report/v1/brazil/${formatDate(todaysDate)}`)
    ).data.data;

    let casesWeek1 = "";
    let casesWeek2 = "";
    let casesWeek3 = "";
    let casesWeek4 = "";
    let casesWeek5 = "";

    let dayWeek2 = "";
    let dayWeek3 = "";
    let dayWeek4 = "";
    let dayWeek5 = "";

    Object.entries(dataWeek1).map((uf) => {
      if (uf[1].uf === "RS") {
        casesWeek1 = uf[1].cases;
      }
    });

    Object.entries(dataWeek2).map((uf) => {
      if (uf[1].uf === "RS") {
        casesWeek2 = uf[1].cases;
        dayWeek2 = new Date(uf[1].datetime);
      }
    });

    Object.entries(dataWeek3).map((uf) => {
      if (uf[1].uf === "RS") {
        casesWeek3 = uf[1].cases;
        dayWeek3 = new Date(uf[1].datetime);
      }
    });

    Object.entries(dataWeek4).map((uf) => {
      if (uf[1].uf === "RS") {
        casesWeek4 = uf[1].cases;
        dayWeek4 = new Date(uf[1].datetime);
      }
    });

    Object.entries(dataWeek5).map((uf) => {
      if (uf[1].uf === "RS") {
        casesWeek5 = uf[1].cases;
        dayWeek5 = new Date(uf[1].datetime);
      }
    });

    const week1 = casesWeek2 - casesWeek1;
    const week2 = casesWeek3 - casesWeek2;
    const week3 = casesWeek4 - casesWeek3;
    const week4 = casesWeek5 - casesWeek4;

    const obj = {
      week1: {
        cases: week1,
        date: dayWeek2,
      },
      week2: {
        cases: week2,
        date: dayWeek3,
      },
      week3: {
        cases: week3,
        date: dayWeek4,
      },
      week4: {
        cases: week4,
        date: dayWeek5,
      },
    };

    return obj;
  }

  async function getChartData() {
    const obj = await getData();
    console.log(obj);

    setCharData({
      labels: [
        `${obj.week1.date.getDate()}/${obj.week1.date.getMonth() + 1}`,
        `${obj.week2.date.getDate()}/${obj.week2.date.getMonth() + 1}`,
        `${obj.week3.date.getDate()}/${obj.week3.date.getMonth() + 1}`,
        `${obj.week4.date.getDate()}/${obj.week4.date.getMonth() + 1}`,
      ],
      datasets: [
        {
          label: "Número do aumento de casos",
          data: [
            obj.week1.cases,
            obj.week2.cases,
            obj.week3.cases,
            obj.week4.cases,
          ],
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
        <p>Total de casos: {countryCase}</p>
        <p>Total de obitos: {countryDeath}</p>
      </div>
      {isBusy ? (
        <p>Loading</p>
      ) : (
        <div>
          <LineChart chartData={chartData} legendPosition="top" />
          <DoughnutChart chartData={chartData} legendPosition="top" />
        </div>
      )}
    </div>
  );
}
