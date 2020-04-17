import React, { useState, useEffect } from "react";
import "./MiddleList.css";
import api from "../services/api";

export default function MiddleList() {
  const [deaths, setDeaths] = useState("");
  const [confirmed, setConfirmed] = useState("");

  useEffect(() => {
    getMiddleListData();
  });

  function getLetality() {
    return `${((deaths * 100) / confirmed).toFixed(2)}%`;
  }

  async function getMiddleListData() {
    const data = await (
      await api.get("/api/report/v1/brazil")
    ).data.data;

    setDeaths(data.deaths);
    setConfirmed(data.confirmed);
  }

  return (
    <div className="MiddleList">
      <p className="letTitle">Letalidade</p>
      <p className="content">{getLetality()}</p>
      {/* <p>valor</p>
      <p>v</p>
      <p>valor</p>
      <p>v</p> */}
    </div>
  );
}
