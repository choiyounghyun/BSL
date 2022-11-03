import React from "react";
import BrandCard from "../components/BrandCard";
import "./Ranking.css";
import RankBanner from "../assets/images/rank-dummy.jpg";

function Ranking(props) {
  return (
    <div id="raking">
      <div className="ranking-banner">
        <img src={RankBanner} alt="" className="ranking-banner__img" />
        <p align="center">ranking</p>
      </div>
      <BrandCard />
    </div>
  );
}

export default Ranking;
