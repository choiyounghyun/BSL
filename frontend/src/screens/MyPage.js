import React, { useState, useEffect } from "react";
import "./MyPage.css";
import axios from "axios";
import banner from "../assets/images/mypage-banner.jpg";

function MyPage() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("refreshToken");
    console.log(token);
    axios
      .get("https://k7c208.p.ssafy.io/api/auth/userinfo", {
        headers: {
          RefreshToken: { token }
        }
      })
      .then(res => {
        console.log(res.data);
        setUserInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div id="my-page">
      <div className="mypage-banner">
        <img src={banner} alt="banner" />
        <div className="mypage-title">
          <h2>MYPAGE</h2>
        </div>
      </div>
      <div className="mypage-container">
        <div className="info">
          <div className="info__name">{userInfo?.nickname}</div>
          <div className="info__number"></div>
          <div className="info__password">
            <button type="button"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
