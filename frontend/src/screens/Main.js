import React from "react";
import "./Main.css";
import Carousel from "react-bootstrap/Carousel";
import banner1Man from "../assets/images/banner1-man.svg";
import banner1Map from "../assets/images/banner1-map.svg";
import banner2Man from "../assets/images/banner2-man.svg";
import banner2Map from "../assets/images/banner2-map.svg";
import banner2Food from "../assets/images/banner2-food.svg";

function Main(props) {
  return (
    <div id="main">
      <Carousel interval="4000" nextIcon="" prevIcon="">
        <Carousel.Item>
          <div className="first-banner">
            <img src={banner1Man} alt="banner1man" className="banner1-man" />
            <img src={banner1Map} alt="banner1map" className="banner1-map" />
          </div>
          <Carousel.Caption>
            <h3>회사에서 짤린 당신</h3>
            <p>음식점을 차리고 싶은데 어디 좋은 자리 없나?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="second-banner">
            <img src={banner2Man} alt="banner2man" className="banner2-man" />
            <img src={banner2Map} alt="banner2map" className="banner2-map" />
            <img src={banner2Food} alt="banner2food" className="banner2-food" />
          </div>
          <Carousel.Caption>
            <h3>자 새로운 인생 시작이다!</h3>
            <p>고객맞춤형 데이터 기반 검색 서비스를 제공합니다!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="third-banner"></div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="main-intro">
        <div className="main-intro__first">
          <h2 align="center">상권분석하기</h2>
          <div className="anal-banner">
            <Carousel>
              <Carousel.Item>
                <div className="third-banner"></div>
                <Carousel.Caption>
                  <h3>slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <img src="" alt="" className="anal-banner__img" />
          </div>
        </div>
        <div className="main-intro__second">
          <h2 align="center">커뮤니티</h2>
          <div className="com-banner">
            <Carousel>
              <Carousel.Item>
                <div className="third-banner"></div>
                <Carousel.Caption>
                  <h3>slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <img src="" alt="" className="com-banner__img" />
          </div>
        </div>
        <div className="main-intro__third">
          <h2 align="center">랭킹보기</h2>
          <div className="rank-banner">
            <img src="" alt="" className="rank-banner__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
