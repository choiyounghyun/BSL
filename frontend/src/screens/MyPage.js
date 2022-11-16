import React, { useState, useEffect } from "react";
import "./MyPage.css";
import banner from "../assets/images/mypage-banner.jpg";

function MyPage() {
  return (
    <div id="my-page">
      <div className="mypage-banner">
        <img src={banner} alt="banner" />
        <div className="mypage-title">
          <h2>MYPAGE</h2>
        </div>
      </div>
      <div className="mypage-container"></div>
    </div>
  );
}

export default MyPage;
