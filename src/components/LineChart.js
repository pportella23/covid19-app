import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import api from "../services/api";
import Select from "react-select";
import uf from "../utils/uf";
import "./LineChart.css";

//6370ff

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
    if (todaysDate.getDate() < 10) {
      day = "0" + todaysDate.getDate();
    } else {
      day = todaysDate.getDate();
    }

    return year + month + day;
  }

  async function getData(test) {
    let todaysDate = new Date();
    let days = 86400000;

    const dataWeek1 = await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 42 * days))}`
      )
    ).data.data;
    const dataWeek2 = await await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 35 * days))}`
      )
    ).data.data;
    // console.log(dataWeek2);
    let dataWeek3 = await await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 28 * days))}`
      )
    ).data.data;
    if (dataWeek3.length === 0) {
      dataWeek3 = await (
        await api.get(
          `/api/report/v1/brazil/${formatDate(
            new Date(todaysDate - 29 * days)
          )}`
        )
      ).data.data;
    }

    const dataWeek4 = await await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 21 * days))}`
      )
    ).data.data;
    const dataWeek5 = await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 14 * days))}`
      )
    ).data.data;
    const dataWeek6 = await (
      await api.get(
        `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 7 * days))}`
      )
    ).data.data;
    let dataWeek7 = await (
      await api.get(`/api/report/v1/brazil/${formatDate(todaysDate)}`)
    ).data.data;

    //Treat error when there is no data in api, in specific day
    if (dataWeek7.length === 0) {
      dataWeek7 = await (
        await api.get(
          `/api/report/v1/brazil/${formatDate(new Date(todaysDate - 1 * days))}`
        )
      ).data.data;
    }

    let casesWeek1 = "";
    let casesWeek2 = "";
    let casesWeek3 = "";
    let casesWeek4 = "";
    let casesWeek5 = "";
    let casesWeek6 = "";
    let casesWeek7 = "";

    let dayWeek2 = "";
    let dayWeek3 = "";
    let dayWeek4 = "";
    let dayWeek5 = "";
    let dayWeek6 = "";
    let dayWeek7 = "";

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

    Object.entries(dataWeek6).map((uf) => {
      if (uf[1].uf === test) {
        casesWeek6 = uf[1].cases;
        dayWeek6 = new Date(uf[1].datetime);
      } else {
        if (uf[1].uf === "RS") {
          casesWeek6 = uf[1].cases;
          dayWeek6 = new Date(uf[1].datetime);
        }
      }
    });

    Object.entries(dataWeek7).map((uf) => {
      if (uf[1].uf === test) {
        casesWeek7 = uf[1].cases;
        dayWeek7 = new Date(uf[1].datetime);
      } else {
        if (uf[1].uf === "RS") {
          casesWeek7 = uf[1].cases;
          dayWeek7 = new Date(uf[1].datetime);
        }
      }
    });

    let week1 = casesWeek2 - casesWeek1;
    if (week1 < 0) {
      week1 = 0;
    }
    let week2 = casesWeek3 - casesWeek2;
    if (week2 < 0) {
      week2 = 0;
    }
    let week3 = casesWeek4 - casesWeek3;
    if (week3 < 0) {
      week3 = 0;
    }
    let week4 = casesWeek5 - casesWeek4;
    if (week4 < 0) {
      week4 = 0;
    }
    let week5 = casesWeek6 - casesWeek5;
    if (week5 < 0) {
      week5 = 0;
    }
    let week6 = casesWeek7 - casesWeek6;
    if (week6 < 0) {
      week6 = 0;
    }

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
      week5: {
        cases: week5,
        date: dayWeek6,
      },
      week6: {
        cases: week6,
        date: dayWeek7,
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
        `${obj.week5.date.getDate()}/${obj.week5.date.getMonth() + 1}`,
        `${obj.week6.date.getDate()}/${obj.week6.date.getMonth() + 1}`,
      ],
      datasets: [
        {
          label: "Aumento de casos por semana",
          data: [
            obj.week1.cases,
            obj.week2.cases,
            obj.week3.cases,
            obj.week4.cases,
            obj.week5.cases,
            obj.week6.cases,
          ],
          borderColor: "#6370ff",
          backgroundColor: "rgba(99, 112, 255, 0.3)",
          pointBackgroundColor: "#6370ff",
          pointRadius: 4,
          pointHoverRadius: 8,
          pointHoverBorderColor: "rgba(121, 209, 255, 0.9)",
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
      <p className="title">{`Aumento de casos no estado ${
        value ? value.value : "RS"
      }`}</p>
      <div className="select">
        <Select
          value={value}
          onChange={(selected) => handleChange(selected)}
          options={uf}
          placeholder="Selecione um Estado"
          className="select"
        />
      </div>

      {isBusy ? (
        <Line
          height={100}
          data={chartData}
          options={{
            legend: {
              display: true,
              position: "bottom",
            },
            maintainAspectRatio: true,
          }}
        />
      ) : (
        <Line
          height={100}
          data={chartData}
          options={{
            legend: {
              display: true,
              position: "bottom",
            },
            maintainAspectRatio: true,
          }}
        />
      )}
    </div>
  );
}
