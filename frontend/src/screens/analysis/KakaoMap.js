import React, { useEffect } from 'react';
import './KakaoMap.css'; // 지도 CSS
import axios from 'axios';

const kakao = window['kakao'];

const KakaoMap = ({ }) => { // searchPlace = 검색할 장소를 나타냄
  useEffect(() => {
    let container = document.getElementById('map');
    let center = new kakao.maps.LatLng(37.5518, 126.9881);
    let options = {
      center,
      level: 9,
      // draggable: false,
    };
    let map = new kakao.maps.Map(container, options);

    // var ps = new kakao.maps.services.Places();

    // ps.keywordSearch(searchPlace, placesSearchCB);

    // function placesSearchCB(data, status, pagination) {
    //   if (status === kakao.maps.services.Status.OK) {
    //     var bounds = new kakao.maps.LatLngBounds();

    //     for (var i = 0; i < data.length; i++) {
    //       displayMarker(data[i]);
    //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    //     }

    //     map.setBounds(bounds);
    //   }
    // }

    // function displayMarker(place) {
    //   var marker = new kakao.maps.Marker({
    //     map: map,
    //     position: new kakao.maps.LatLng(place.y, place.x)
    //   });
    // }

    // kakao.maps.event.addListener(map, 'center_changed', function () {
    //   let latlng = map.getCenter();

    //   map.setCenter(latlng);
    //   console.log(map.getCenter());
    // });
  }, []);

  return (
    <div id="map" className="map" />
  );
}

export default KakaoMap;