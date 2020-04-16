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

  function sortList(order, attr){
    let sorted = rankingListData.sort((a,b) => _sortHelper(a, b, order, attr)).map(e => {
      const newItem = {}
      newItem.uid = e.uid++
      newItem.state = e.state
      newItem.cases = e.cases
      newItem.deaths = e.deaths
      return newItem
    })
   setRankingListData(sorted)
  }

  function _sortHelper(a, b, order, attr){
    if(order === "asc"){
      if(a[attr] > b[attr]) return 1
      else if(a[attr] < b[attr]) return -1
      else return 0
    }
    else if(order === "desc"){
      if(a[attr] < b[attr]) return 1
      else if(a[attr] > b[attr]) return -1
      else return 0
    }
  }

  return (
    <div className="c">
      <div className="blueTable">
        <table>
          <thead className="head">
            <tr>
              <th>Estado
              <div class="sort-controls">
                <div onClick={() => sortList("asc", "state")} class="text-asc">Asc</div>|<div onClick={() => sortList("desc", "state")} class="text-desc">Desc</div>
              </div>
              </th>
              <th>Casos
                <div class="sort-controls">
                  <div onClick={() => sortList("asc", "cases")} class="text-asc">Asc</div>|<div onClick={() => sortList("desc", "cases")} class="text-desc">Desc</div>
                </div>
              </th>
              <th>Óbitos
                <div class="sort-controls">
                  <div onClick={() => sortList("asc", "deaths")} class="text-asc">Asc</div>|<div onClick={() => sortList("desc", "deaths")} class="text-desc">Desc</div>
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
