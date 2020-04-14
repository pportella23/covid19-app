import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import api from "../services/api";
import Select from "react-select";
import uf from "../utils/uf";

export default function Chart() {
  const [chartData, setCharData] = useState({});
  const [isBusy, setBusy] = useState(true);

  //UF
  const [value, setValue] = useState("");

  //updatedAt

  useEffect(() => {
    getChartData(value);
  }, [value]);

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
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 1 * days))}`
      )
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

  function handleChange(selectedOption) {
    setValue(selectedOption);
  }

  return (
    <div className="chart">
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
        <Line
          height={100}
          data={chartData}
          options={{
            title: {
              display: true,
              text: `Corona no estado ${value ? value.value : "RS"}`,
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
            },
            maintainAspectRatio: true,
          }}
        />
      )}
    </div>
  );
}
