import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <div id="profile">
      <div className="profile__info">
        <p>이름 : 고요한</p>
        <p>전화번호 : 010-6637-1840</p>
        <p>이메일 : rdg9074@ssafy.com</p>
        <div className="profile__region">
          <p>관심지역</p>
          <div className="profile__region-btn"></div>
        </div>
        <div className="profile__budget">
          <p>예산계획</p>
          <div className="profile__budget-btn"></div>
        </div>
        <div className="profile__sector">
          <p>관심업종</p>
          <div className="profile__sector-btn">
            <button type="button">치킨</button>
            <button type="button">피자</button>
            <button type="button">일식</button>
            <button type="button">한식</button>
            <button type="button">분식</button>
            <button type="button">양식</button>
          </div>
        </div>
        <div className="profile__schedule">
          <p>창업기간</p>
          <div className="profile__schedule-btn">
            <button type="button">3개월 이내</button>
            <button type="button">6개월 이내</button>
            <button type="button">1년 이내</button>
            <button type="button">1년 이상</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
