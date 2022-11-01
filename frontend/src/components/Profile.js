import React, { useEffect } from "react";
import "./Profile.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Profile(props) {
  const gangnam = ["강남1", "강남2", "강남3", "강남4"];
  const gangdong = ["강동1", "강동2", "강동3", "강동4"];
  const gangbook = ["강북1", "강북2", "강북3", "강북4"];
  const gangseo = ["강서1", "강서2", "강서3", "강서4"];

  return (
    <div id="profile">
      <div className="profile__info">
        <p>이름 : 고요한</p>
        <p>전화번호 : 010-6637-1840</p>
        <p>이메일 : rdg9074@ssafy.com</p>
        <div className="profile__region">
          <p>관심지역</p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              지역선택하기
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item value="강남">강남</Dropdown.Item>
              <Dropdown.Item value="강동">강동</Dropdown.Item>
              <Dropdown.Item value="강북">강북</Dropdown.Item>
              <Dropdown.Item value="강서">강서</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="profile__region-btn"></div>
        </div>
        <div className="profile__budget">
          <p>예산계획</p>
          <div className="profile__budget-btn">
            <button type="button">5천 이내</button>
            <button type="button">5천 ~ 1억</button>
            <button type="button">1억 ~ 1억 5천</button>
            <button type="button">1억 5천 ~ 2억</button>
          </div>
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
