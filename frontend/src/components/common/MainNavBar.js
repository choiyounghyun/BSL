import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/mainlogo.svg";

function MainNavBar() {
  return (
    <div classname="nav-wrapper">
      <nav id="main-nav-bar">
        <img className="logo" alt="logo" src={LogoImg} />
        <Link className="title" to="/">
          BSL
        </Link>
        <div className="nav-container">
          <nav className="left-nav">
            <NavLink to="/anal">상권분석</NavLink>
            <NavLink to="/community">커뮤니티</NavLink>
            <NavLink to="/ranking">랭킹</NavLink>
          </nav>
          <nav className="right-nav">
            <Link to="/login">로그인</Link>
            <Link to="/join">회원가입</Link>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default MainNavBar;
