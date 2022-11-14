import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import mainChicken from "../assets/images/main-chicken.jpg";
import mainPizza from "../assets/images/main-pizza.jpg";
import logo from "../assets/images/mainlogo.svg";
// import mainCook from "../assets/images/main-cook.jpg";

function Main(props) {
  useEffect(() => {
    if ((localStorage.getItem('user')) === null) {
      setIsLogin(false)
    } else {
      getuserInfo()
    }
  })
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const [userinfo, setUserinfo] = useState("");
  const getuserInfo = () => {
    if (userinfo === (localStorage.getItem('user'))) {
    } else {
      console.log(userinfo);
      setUserinfo(localStorage?.getItem('user'))
      setIsLogin(true)

    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("user");
    setUserinfo("");
  }
  const [menu, setMenu] = useState("");
  const menuToggle = () => {
    if (menu === "") {
      setMenu("active");
    } else {
      setMenu("");
    }
  };

  const loginbutton = (
    <>
      <div className="middle-menu__user-login">
        <Link to="/signin" className="middle-menu__user-login__link">
          SIGN IN
        </Link>
      </div>
      <div className="middle-menu__user-join">
        <Link to="/signup" className="middle-menu__user-join__link">
          SIGN UP
        </Link>
      </div>
    </>
  );

  const logoutbutton = (
    <>
      <div className="middle-menu__user-logout" onClick={() => handleLogout()}>
        <Link to="/" className="middle-menu__user-logout__link">
          LOGOUT
        </Link>
      </div>
    </>
  )
  return (
    <div id="main" data-barba="wrapper">
      <div className="trans-left-img">
        <img
          src={mainChicken}
          alt="main-left-img"
          className="trans-left-img__img"
        />
      </div>
      <div className="trans-right-img">
        <img
          src={mainPizza}
          alt="main-right-img"
          className="trans-right-img__img"
        />
      </div>
      <div className="trans-clip">
        <div className="trans-clip-mask"></div>
      </div>
      <div className="main-container">
        <header className="main-header">
          <div className="header__container">
            <div className="header__head">
              <div
                className={`header__head-circle ${menu === "active" ? "--active" : ""
                  }`}
                onClick={menuToggle}
              >
                <div className="header__head-circle-in">
                  <img src={logo} alt="logo" className="head-circle-logo" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={`main-ground ${menu === "active" ? "--active" : ""}`}>
          <div className="ground-left">
            <div className="ground-left__img-wrapper">
              <img
                src={mainChicken}
                alt="ground-left-img"
                className="ground-left__img"
              />
            </div>
            <div className="ground-left__title">
              <h1>BRAVO!!</h1>
            </div>
          </div>
          <div className={`middle-menu ${menu === "active" ? "--active" : ""}`}>
            {/* <div className="middle-menu__bg">
              <img src={mainCook} alt="main-cook" />
            </div> */}
            <div className="middle-menu__analysis">
              <Link to="/anal" style={{ textDecoration: "none" }}>
                <div className="middle-menu__analysis-title">상권분석</div>
              </Link>
            </div>
            <div className="middle-menu__analysis-description"></div>
            <div className="middle-menu__ranking">
              <Link to="/ranking" style={{ textDecoration: "none" }}>
                <div className="middle-menu__ranking-title">인기매장</div>
              </Link>
            </div>
            <div className="middle-menu__ranking-description"></div>
            <div className="middle-menu__user">
              {isLogin ? logoutbutton : loginbutton}
              {/* <div className="middle-menu__user-login">
                <Link to="/signin" className="middle-menu__user-login__link">
                  SIGN IN
                </Link>
              </div>
              <div className="middle-menu__user-join">
                <Link to="/signup" className="middle-menu__user-join__link">
                  SIGN UP
                </Link>
              </div> */}
            </div>
          </div>
          <div className="ground-right">
            <div className="ground-right__img-wrapper">
              <img
                src={mainPizza}
                alt="ground-right-img"
                className="ground-right__img"
              />
            </div>
            <div className="ground-right__title">
              <h1>
                SILVER
                <br />
                LIFE!!
              </h1>
            </div>
            <div className="ground-right__admin">
              <h4>by miseoni</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
