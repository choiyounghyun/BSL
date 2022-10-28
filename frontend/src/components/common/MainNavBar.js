import React from "react";
import "./MainNavBar.css";
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
            <NavLink className="analysis" to="/anal">
              상권분석
            </NavLink>
            <NavLink className="community" to="/community">
              커뮤니티
            </NavLink>
            <NavLink className="ranking" to="/ranking">
              랭킹
            </NavLink>
          </nav>
          <nav className="right-nav">
            <Link className="login" to="/login">
              LOGIN
            </Link>
            <Link className="join" to="/join">
              JOIN
            </Link>
          </nav>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default MainNavBar;
