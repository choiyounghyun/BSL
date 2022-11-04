import React from "react";
import "./Main.css";
import mainChicken from "../assets/images/main-chicken.jpg";
import mainPizza from "../assets/images/main-pizza.jpg";

function Main(props) {
  return (
    <div id="main">
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
            <div className="header__head"></div>
          </div>
        </header>
        <div className="main-ground">
          <div className="ground-left">
            <div className="ground-left__img-wrapper"></div>
          </div>
          <div className="ground-right">
            <div className="ground-right__img-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
