import React, { useEffect, useState } from "react";
import "./Community.css";
import { Link } from "react-router-dom";
import SupportList from "../components/community/SupportList.js";
import ShareList from "../components/community/ShareList.js";
import RequestList from "../components/community/RequestList.js";
import dummy from "../assets/images/mainlogo.svg";
import plus from "../assets/images/plus.png";

function Community(props) {
  return (
    <div id="community">
      <div className="community__banner">
        <div className="img-wrapper">
          <img className="com-img" src={dummy} alt="banner" />
        </div>
        <div className="community__news">
          <div className="community__news-list1">
            <p>
              '뿌동산TV' 백종원,
              <br /> 창업꿈나무들에게 전하는 상권분석 꿀팁
            </p>
            <hr />
          </div>
          <div className="community__news-list2">
            <p>백종원이 초보들에게 권하는 7가지 꿀팁</p>
            <hr />
          </div>
          <div className="community__news-list3">
            <p>
              상권분석, 입지분석 망하는 식당 카페는 꼭!
              <br />
              이런자리에 차리죠. Top5 꿀팁!
            </p>
            <hr />
          </div>
        </div>
      </div>
      <hr className="banner-line" />
      <div className="community__info">
        <div className="community__info__support">
          <div className="community__info__support__title">
            <p className="sochan">창업지원</p>
            <Link to={`/community/support`}>
              <img src={plus} alt="plus" className="plus-icon" />
            </Link>
          </div>
          <hr className="support-line" />
          {/* <SupportList /> */}
        </div>
        <div className="community__info__share">
          <div className="community__info__share__title">
            <p className="sochan">정보공유</p>
            <Link to={`/community/share`}>
              <img src={plus} alt="plus" className="plus-icon" />
            </Link>
          </div>
          <hr className="share-line" />
          {/* <ShareList /> */}
        </div>
        <div className="community__info__request">
          <div className="community__info__request__title">
            <p className="sochan">매물요청</p>
            <Link to={`/community/request`}>
              <img src={plus} alt="plus" className="plus-icon" />
            </Link>
          </div>
          <hr className="request-line" />
          {/* <RequestList /> */}
        </div>
      </div>
    </div>
  );
}

export default Community;
