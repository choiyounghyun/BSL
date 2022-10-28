import React, { useState } from "react";
import "./MyPage.css";
import Profile from "../components/Profile.js";
import Like from "../components/Like.js";
import BookMark from "../components/BookMark.js";

function MyPage(props) {
  const [category, setCategory] = useState("profile");

  return (
    <div id="my-page">
      <p align="center">mypage</p>
      <div className="category-btn">
        <button className="" type="button">
          마이프로필
        </button>
        <button className="" type="button">
          북마크
        </button>
        <button className="" type="button">
          좋아요
        </button>
      </div>
      <hr />
      <div className="page-wrapper">
        <div>버튼별 컴포넌트 선택</div>
      </div>
    </div>
  );
}

export default MyPage;
