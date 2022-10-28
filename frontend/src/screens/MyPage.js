import React from "react";
import "./MyPage.css";

function MyPage(props) {
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
      <div className="page-wrapper"></div>
    </div>
  );
}

export default MyPage;
