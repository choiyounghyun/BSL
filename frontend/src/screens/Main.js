import React, {useState} from "react";
import "./Main.css";
import mainChicken from "../assets/images/main-chicken.jpg";
import mainPizza from "../assets/images/main-pizza.jpg";
import logo from "../assets/images/mainlogo.svg"

function Main(props) {
  const [menu, setMenu] = useState("")
  const menuToggle = () => {
    if (menu === "") {
      setMenu("active")
    } else {
      setMenu("")
    }
  }
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
              <div className="header__head-circle" onClick={menuToggle}>
                <div className="header__head-circle-in">
                  <img src={logo} alt="logo" className="head-circle-logo"/>
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
          </div>
          <div className="middle-menu">
            <div className=""></div>
          </div>
          <div className="ground-right">
            <div className="ground-right__img-wrapper">
              <img
                src={mainPizza}
                alt="ground-right-img"
                className="ground-right__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
