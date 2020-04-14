import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./TotalStats.css";

export default function TotalStats() {
  //updatedAt
  const [updated, setUpdated] = useState("");
  const [countryCase, setCountryCase] = useState("");
  const [countryDeath, setCountryDeath] = useState("");

  useEffect(() => {
    getCountryCases();
  }, []);

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

  return (
    <div className="container">
      <p>Total de casos: {countryCase}</p>
      <p>Total de obitos: {countryDeath}</p>
      <p>última atualização: {updated}</p>
    </div>
  );
}
