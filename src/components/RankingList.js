import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./RankingList.css";

export default function RankingList() {
  const [rankingListData, setRankingListData] = useState([]);

  useEffect(() => {
    getRankingListData();
  }, []);

  function getLetality(uf) {
    return `${((uf.deaths * 100) / uf.cases).toFixed(2)}%`;
  }

  async function getRankingListData() {
    const data = await (
      await api.get("https://covid19-brazil-api.now.sh/api/report/v1")
    ).data.data;
    setRankingListData(data);
  }

  return (
    <div className="blueTable">
      <table>
        <thead className="head">
          <tr>
            <th>Estado</th>
            <th>Casos</th>
            <th>Óbitos</th>
            <th>Letalidade</th>
          </tr>
        </thead>
        {rankingListData.map((uf) => {
          return (
            <tbody key={uf.uid}>
              <tr>
                <td>
                  <strong>{uf.state}</strong>
                </td>
                <td>{uf.cases}</td>
                <td>{uf.deaths}</td>
                <td>{getLetality(uf)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
