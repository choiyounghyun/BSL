import React, { useEffect, useState } from "react";
import "./RankingDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChartClosureRates from "../components/ChartClosureRates.js";
import ChartFranchiseeCount from "../components/ChartFranchiseeCount";
import ChartCount from "../components/ChartCount";

function RankingDetail() {
  const [info, setInfo] = useState();
  const { id } = useParams();
  useEffect(() => {
    // const getBrandDetail = async () => {
    //   try {
    //     const { data } = await getBrandDetail(id);
    //     console.log(data);
    //     setInfo(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    axios({
      url: "https://k7c208.p.ssafy.io/api/v1/franchise/franchise-detail",
      method: "get",
      params: { id: id }
    })
      .then(res => {
        setInfo(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div id="rankingdetail">
      <div className="rankingdetail-container">
        <div className="ranking-header">
          <div className="img-wrapper">
            <img src={info?.logoUrl} alt="logo" />
          </div>
          <div className="info-menu">
            <div className="title">브랜드명 : {info?.name}</div>
            <div className="monthly-sale">
              평균 총 매출액 : {info?.monthlySales.toString().substr(0, 4)}만원
            </div>
            <div className="total-cost">
              평균 창업 총 비용 :{" "}
              {info?.initialCost.total.toString().substr(0, 4)}
              만원
            </div>
          </div>
        </div>
        <hr />
        <div className="rankingdetail-body">
          <ChartClosureRates info={info} />
          <ChartFranchiseeCount info={info} />
          <ChartCount info={info} />
        </div>
      </div>
    </div>
  );
}

export default RankingDetail;
