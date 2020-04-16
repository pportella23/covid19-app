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

  function sortByCases(sort){
    let sorted = rankingListData.sort((a,b) => _caseSort(a,b,sort)).map(e => {
      const newItem = {}
      newItem.uid = e.uid++
      newItem.state = e.state
      newItem.cases = e.cases
      newItem.deaths = e.deaths
      return newItem
    })
   setRankingListData(sorted)
  }

  function sortByDeaths(sort){
    let sorted = rankingListData.sort((a,b) => _deathSort(a,b,sort)).map(e => {
      const newItem = {}
      newItem.uid = e.uid++
      newItem.state = e.state
      newItem.cases = e.cases
      newItem.deaths = e.deaths
      return newItem
    })
   setRankingListData(sorted)
  }

  function _deathSort(a,b,sort){
    if(sort === "desc"){
      if(a.deaths > b.deaths) return 1
      else if(a.deaths < b.deaths) return -1
      else return 0
    }
    else if(sort === "asc"){
      if(a.deaths < b.deaths) return 1
      else if(a.deaths > b.deaths) return -1
      else return 0
    }
  }

  function _caseSort(a,b,sort){
    if(sort === "desc"){
      if(a.cases > b.cases) return 1
      else if(a.cases < b.cases) return -1
      else return 0
    }
    else if(sort === "asc"){
      if(a.cases < b.cases) return 1
      else if(a.cases > b.cases) return -1
      else return 0
    }
  }

  return (
    <div className="c">
      <div className="blueTable">
        <table>
          <thead className="head">
            <tr>
              <th>Estado</th>
              <th>Casos
                <div class="sort-controls">
                  <div onClick={() => sortByCases("asc")} class="text-asc">Asc</div>|<div onClick={() => sortByCases("desc")} class="text-desc">Desc</div>
                </div>
              </th>
              <th>Óbitos
                <div class="sort-controls">
                  <div onClick={() => sortByDeaths("asc")} class="text-asc">Asc</div>|<div onClick={() => sortByDeaths("desc")} class="text-desc">Desc</div>
                </div>
              </th>
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
    </div>
  );
}
