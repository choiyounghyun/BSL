import React, { useState, useEffect } from "react";
import "./MyPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import banner from "../assets/images/mypage-banner.jpg";
import Logo from "../assets/AnalysisImages/BSL_Logo.png";

function MyPage() {
  const [userInfo, setUserInfo] = useState("");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   let token = localStorage.getItem("refreshToken");
  //   console.log(token);
  //   axios
  //     .get("https://k7c208.p.ssafy.io/api/auth/userinfo", {
  //       headers: {
  //         RefreshToken: { token }
  //       }
  //     })
  //     .then(res => {
  //       console.log(res.userdata);
  //       setUserInfo(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userdata")));
  }, []);
  return (
    <div id="my-page">
      <div className="mypage-banner">
        <img src={banner} alt="banner" />
        <Link to="/">
          <div className="mypage-logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="mypage-title">
          <h2>MYPAGE</h2>
        </div>
      </div>
      <div className="mypage-container">
        <div className="info">
          <div className="info__name">{userInfo.id}</div>
          <div className="info__number">{userInfo.nickname}</div>
          <div className="info__password">{userInfo.phonenumber}</div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
