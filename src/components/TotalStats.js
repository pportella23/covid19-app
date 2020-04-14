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

  function getLetality() {
    return `${((countryDeath * 100)/countryCase).toFixed(2)}%`;
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <p className="containerFont">Casos Confirmados</p>
          <p><strong className="strongCase">{countryCase}</strong></p>
        </div>
        <div className="box">
          <p className="containerFont">Total de Óbitos</p>
          <p><strong className="strongDeath">{countryDeath}</strong></p>
        </div>
        <div className="box">
          <p className="containerFont">Taxa de Letalidade</p>
          <p><strong className="strongLetal">{getLetality()}</strong></p>
        </div>
      </div>
      <div className="updated">
        <p className="containerFont">última atualização</p>
        <p><strong className="">{updated}</strong></p>
      </div>
    </>
  );
}
