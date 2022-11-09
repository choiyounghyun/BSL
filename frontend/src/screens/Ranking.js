import React, { useState, useEffect } from "react";
import "./Ranking.css";
import ranking from "../assets/images/ranking-side.jpg";
import { Link } from "react-router-dom";
import BrandCard from "../components/BrandCard.js";

function Ranking(props) {
  const [tagType, setTagType] = useState("popular");
  const [category, setCategory] = useState("치킨");
  const eventHandler = () => {
    setCategory({ ...category });
  };
  return (
    <div id="ranking">
      <div className="ranking-container">
        <div className="container-left">
          <Link to="/login">
            <img
              src={ranking}
              alt="ranking-side"
              className="container-left__img"
            />
          </Link>
        </div>
        <div className="container-right">
          <hr style={{ marginTop: "60px" }} />
          <div className="container-right__menu">
            <div className="menu-btn">
              <Link
                onClick={() => {
                  setTagType("popular");
                }}
                className={`menu-btn1 ${
                  tagType === "popular" ? "active" : null
                }`}
              >
                인기 순
              </Link>
              <Link
                onClick={() => {
                  setTagType("count");
                }}
                className={`menu-btn2 ${
                  tagType === "popular" ? null : "active"
                }`}
              >
                매장 수 순
              </Link>
            </div>
          </div>
          <hr />
          <div className="category-wrap">
            <div className="category">
              <div
                className={`${category === "치킨" ? "active" : null}`}
                onClick={() => {
                  eventHandler("치킨");
                }}
              >
                치킨
              </div>
              <div
                className={`${category === "피자" ? "active" : null}`}
                onClick={() => {
                  eventHandler("피자");
                }}
              >
                피자
              </div>
              <div
                className={`${category === "분식" ? "active" : null}`}
                onClick={() => setCategory("분식")}
              >
                분식
              </div>
              <div
                className={`${category === "패스트푸드" ? "active" : null}`}
                onClick={() => setCategory("패스트푸드")}
              >
                패스트푸드
              </div>
              <div
                className={`${category === "제과제빵" ? "active" : null}`}
                onClick={() => setCategory("제과제빵")}
              >
                제과제빵
              </div>
              <br />
              <div
                className={`${category === "디저트" ? "active" : null}`}
                onClick={() => setCategory("디저트")}
              >
                디저트
              </div>
              <div
                className={`${category === "한식" ? "active" : null}`}
                onClick={() => setCategory("한식")}
              >
                한식
              </div>
              <div
                className={`${category === "중식" ? "active" : null}`}
                onClick={() => setCategory("중식")}
              >
                중식
              </div>
              <div
                className={`${category === "일식" ? "active" : null}`}
                onClick={() => setCategory("일식")}
              >
                일식
              </div>
              <div
                className={`${category === "양식" ? "active" : null}`}
                onClick={() => setCategory("양식")}
              >
                양식
              </div>
              <div
                className={`${category === "퓨전" ? "active" : null}`}
                onClick={() => setCategory("퓨전")}
              >
                퓨전
              </div>
              <div
                className={`${category === "주점" ? "active" : null}`}
                onClick={() => setCategory("주점")}
              >
                주점
              </div>
            </div>
          </div>
          <div className="container-left__list">
            <BrandCard type={tagType} category={category} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
