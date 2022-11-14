import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RankingDetail.css";
import { useParams } from "react-router-dom";

function RankingDetail() {
  const [info, setInfo] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios({
      url: "https://k7c208.p.ssafy.io/api/v1/franchise/franchise-detail",
      method: "get",
      params: { id: id }
    })
      .then(res => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);
  return (
    <div id="rankingdetail">
      <div>rankingdetail</div>
    </div>
  );
}

export default RankingDetail;
