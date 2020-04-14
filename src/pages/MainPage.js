import React, { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import "./MainPage.css";
import api from "../services/api";
import Select from "react-select";
import uf from "../utils/uf";

export default function MainPage() {
  const [chartData, setCharData] = useState({});
  const [isBusy, setBusy] = useState(true);
  const [countryCase, setCountryCase] = useState("");
  const [countryDeath, setCountryDeath] = useState("");

  //Doughnut
  const [loadingDoughnut, setLoadingDoughnut] = useState(true);
  const [doughnutData, setDoughnutData] = useState({});

  //UF
  const [value, setValue] = useState("");

  //updatedAt
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    getCountryCases();
    chartDoughnut();
  }, []);

  useEffect(() => {
    getChartData(value);
  }, [value]);

  function handleChange(selectedOption) {
    setValue(selectedOption);
  }

  async function getCountryCases() {
    const data = await api.get("/api/report/v1/brazil");
    const cases = data.data.data.confirmed;
    const deaths = data.data.data.deaths;
    const updatedAt = data.data.data.updated_at;
    let d = new Date(updatedAt);
    let up =
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " - " +
      d.getHours() +
      "h";

    setCountryCase(cases);
    setCountryDeath(deaths);
    setUpdated(up);
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

  async function getData(test) {
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
      if (uf[1].uf === test) {
        casesWeek1 = uf[1].cases;
      } else {
        if (uf[1].uf === "RS") {
          casesWeek1 = uf[1].cases;
        }
      }
    });

    Object.entries(dataWeek2).map((uf) => {
      if (uf[1].uf === test) {
        casesWeek2 = uf[1].cases;
        dayWeek2 = new Date(uf[1].datetime);
      } else {
        if (uf[1].uf === "RS") {
          casesWeek2 = uf[1].cases;
          dayWeek2 = new Date(uf[1].datetime);
        }
      }
    });

    Object.entries(dataWeek3).map((uf) => {
      if (uf[1].uf === test) {
        casesWeek3 = uf[1].cases;
        dayWeek3 = new Date(uf[1].datetime);
      } else {
        if (uf[1].uf === "RS") {
          casesWeek3 = uf[1].cases;
          dayWeek3 = new Date(uf[1].datetime);
        }
      }
    });

    Object.entries(dataWeek4).map((uf) => {
      if (uf[1].uf === test) {
        casesWeek4 = uf[1].cases;
        dayWeek4 = new Date(uf[1].datetime);
      } else {
        if (uf[1].uf === "RS") {
          casesWeek4 = uf[1].cases;
          dayWeek4 = new Date(uf[1].datetime);
        }
      }
    });

    Object.entries(dataWeek5).map((uf) => {
      if (uf[1].uf === test) {
        casesWeek5 = uf[1].cases;
        dayWeek5 = new Date(uf[1].datetime);
      } else {
        if (uf[1].uf === "RS") {
          casesWeek5 = uf[1].cases;
          dayWeek5 = new Date(uf[1].datetime);
        }
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

  async function getChartData(uf) {
    setBusy(true);
    const obj = await getData(uf.value);

    setCharData({
      labels: [
        `${obj.week1.date.getDate()}/${obj.week1.date.getMonth() + 1}`,
        `${obj.week2.date.getDate()}/${obj.week2.date.getMonth() + 1}`,
        `${obj.week3.date.getDate()}/${obj.week3.date.getMonth() + 1}`,
        `${obj.week4.date.getDate()}/${obj.week4.date.getMonth() + 1}`,
      ],
      datasets: [
        {
          label: "Número do aumento de casos por semana",
          data: [
            obj.week1.cases,
            obj.week2.cases,
            obj.week3.cases,
            obj.week4.cases,
          ],
          backgroundColor: [
            // "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
          ],
        },
      ],
    });
    setBusy(false);
  }

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
      <div className="cases">
        <p>Total de casos: {countryCase}</p>
        <p>Total de obitos: {countryDeath}</p>
      </div>
      <p>última atualização: {updated}</p>
      <div className="select">
        <Select
          value={value}
          onChange={(selected) => handleChange(selected)}
          options={uf}
          // className="select1"
        />
      </div>

      {isBusy ? (
        <p>Loading</p>
      ) : (
        <LineChart
          uf={value ? value.value : "RS"}
          chartData={chartData}
          legendPosition="top"
        />
      )}
      {loadingDoughnut ? (
        <p>Loading</p>
      ) : (
        <DoughnutChart chartData={doughnutData} legendPosition="top" />
      )}
    </div>
  );
}
