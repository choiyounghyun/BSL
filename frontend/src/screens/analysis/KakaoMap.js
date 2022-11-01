/* global kakao */
import React, { useEffect } from 'react';
import './KakaoMap.css'; // 지도 CSS

const kakao = window['kakao'];

const KakaoMap = ({ searchPlace, rentPriceMin, rentPriceMax, priceMin, priceMax, areaMin, areaMax, leftLon, rightLon, topLat, bottomLat }) => { // searchPlace = 검색할 장소를 나타냄
  useEffect(() => {
    let mapContainer = document.getElementById('map'); // 지도를 표시할 div ('map' = id 명)
    let mapoptions = { // 출력할 지도의 옵션
      center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), // 지도의 중심좌표
      level: 5 // 지도의 확대 레벨
    };
    let map = new kakao.maps.Map(mapContainer, mapoptions); // 지도 생성

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let bounds = new kakao.maps.LatLngBounds();
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    let mapCenter = map.getCenter(); // 현재 지도의 중심좌표
    let mapSWLatLng = bounds.getSouthWest(); // 현재 지도의 남서쪽 좌표
    let mapNELatLng = bounds.getNorthEast(); // 현재 지도의 북동쪽 좌표
    let mapBounds = map.getBounds();
    let boundsStr = bounds.toString();


    // for (let i = 0; i < chicken_address.length; i++) { // 찾은 가게 개수만큼 반복 (50개)
    //   let geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성

    //   geocoder.addressSearch(chicken_address[i], function (result, status) { // 주소로 좌표를 검색
    //     if (status === kakao.maps.services.Status.OK) {
    //       displayMarker(result, i); // 검색된 장소 마커를 표시
    //     }
    //   })
    // };

    // function displayMarker(place, arr) {
    //   let coords = new kakao.maps.LatLng(place[0].y, place[0].x);

    //   let marker = new kakao.maps.Marker({
    //     map: map,
    //     position: coords
    //   });

    //   bounds.extend(coords);

    //   map.setLevel(5, {
    //     animate: {
    //       duration: 300
    //     }
    //   });

    //   map.setBounds(bounds); // 영역 중심으로 설정

    //   kakao.maps.event.addListener(marker, 'click', function () {
    //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + chicken_name[arr] + '</div>');
    //     infowindow.open(map, marker);
    //   });
    // }

    console.log(
      '검색 장소 : ' + searchPlace + '\n' +
      '월세 : ' + rentPriceMin + ' ~ ' + rentPriceMax + '\n' +
      '보증금 : ' + priceMin + ' ~ ' + priceMax + '\n' +
      '방면적 : ' + areaMin + ' ~ ' + areaMax + '\n'
    );
    console.log(mapCenter);
    // console.log(mapSWLatLng);
    // console.log(mapNELatLng);
    // console.log(mapBounds);
    // console.log(boundsStr);
  }, [searchPlace]);

  return (
    <div className="KakaoMap">
      <div id="map" className="map" />
    </div>
  );
}

export default KakaoMap;