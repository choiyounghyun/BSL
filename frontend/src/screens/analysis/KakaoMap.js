import React, { useEffect } from 'react';
import './KakaoMap.css'; // 지도 CSS
import axios from 'axios';

const kakao = window['kakao'];

const KakaoMap = ({ searchPlace, rentPriceMin, rentPriceMax, priceMin, priceMax, areaMin, areaMax }) => { // searchPlace = 검색할 장소를 나타냄
  let monthlyMin = (rentPriceMin === 0 ? 0 : rentPriceMin),
    monthlyMax = (rentPriceMax === 100 ? 1000000 : rentPriceMax),
    saleAndDepositMin = (rentPriceMin === 0 ? 0 : priceMin),
    saleAndDepositMax = (rentPriceMax === 100 ? 1000000 : priceMax),
    roomSizeMin = (areaMin === 0 ? 0 : areaMin),
    roomSizeMax = (areaMax === 0 ? 100 : areaMax);

  let bottomLat = 0, leftLon = 0, topLat = 0, rightLon = 0;
  let region_dong = '';

  useEffect(() => {
    const container = document.getElementById('map');
    const center = new kakao.maps.LatLng(37.5518, 126.9881);
    let options = {
      center,
      level: 5,
      draggable: true,
    };
    let map = new kakao.maps.Map(container, options);

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);

        let swLatLng = bounds.getSouthWest(); // 영역의 남서쪽 좌표
        let neLatLng = bounds.getNorthEast(); // 영역의 북동쪽 좌표


        bottomLat = swLatLng.getLat();
        leftLon = swLatLng.getLng();

        topLat = neLatLng.getLat();
        rightLon = neLatLng.getLng();
      }
    }

    function displayMarker(y, x) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(y, x)
      });

      // kakao.maps.event.addListener(marker, 'click', function () {

      // });
    }

    kakao.maps.event.addListener(map, 'center_changed', function () {
      let latlng = map.getCenter();
      map.setCenter(latlng);
      // map.setLevel(3);

      let swLatLng = map.getBounds().getSouthWest(); // 영역의 남서쪽 좌표
      let neLatLng = map.getBounds().getNorthEast(); // 영역의 북동쪽 좌표

      bottomLat = swLatLng.getLat();
      leftLon = swLatLng.getLng();

      topLat = neLatLng.getLat();
      rightLon = neLatLng.getLng();

      let dong_url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${latlng.La}&y=${latlng.Ma}`
      const myAppKey = '6166cc0d53447a16f521f4fbe7c3422c';

      async function getDongName() {
        try {
          const response = await axios.get(dong_url, {
            headers: { Authorization: `KakaoAK ${myAppKey}` }
          });
          region_dong = response.data.documents[0].region_3depth_name
          let clusters_url = `http://k7c208.p.ssafy.io:8080/api/v1/estate/clusters?dongName=${region_dong}&rentPriceMin=${monthlyMin}&rentPriceMax=${monthlyMax}&priceMin=${saleAndDepositMin}&priceMax=${saleAndDepositMax}&areaMin=${roomSizeMin}&areaMax=${roomSizeMax}&leftLon=${leftLon}&rightLon=${rightLon}&topLat=${topLat}&bottomLat=${bottomLat}`;
          // console.log(clusters_url)//

          await axios
            .get(clusters_url)
            .then((res) => {
              console.log(res.data);

              let bounds = new kakao.maps.LatLngBounds();

              for (let i = 0; i < res.data.length; i++) {
                bounds.extend(new kakao.maps.LatLng(res.data[i].latitude, res.data[i].longitude));
                displayMarker(res.data[i].latitude, res.data[i].longitude);
              }

            })
            .catch((error) => {
              console.log(error);
            })
        }
        catch (error) {
          console.error(error);
        }
      }

      getDongName();

      // axios
      //   .get(dong_url, {
      //     headers: { Authorization: `KakaoAK ${myAppKey}` },
      //   })
      //   .then((res) => {
      //     region_dong = res.data.documents[0].region_3depth_name;
      //     console.log(region_dong);
      //   })

      // let clusters_url = `http://k7c208.p.ssafy.io:8080/api/v1/estate/clusters?dongName=${region_dong}&rentPriceMin=${rentPriceMin}&rentPriceMax=${rentPriceMax}&priceMin=${priceMin}&priceMax=${priceMax}&areaMin=${areaMin}&areaMax=${areaMax}&leftLon=${leftLon}&rightLon=${rightLon}&topLat=${topLat}&bottomLat=${bottomLat}`;
      // axios
      //   .get(clusters_url)
      //   .then((res) => {
      //     // let bounds = new kakao.maps.LatLngBounds();

      //     // for (let i = 0; i < res.data.length; i++) {
      //     //   bounds.extend(new kakao.maps.LatLng(res.data[i].latitude, res.data[i].longitude));
      //     //   displayMarker(res.data[i].latitude, res.data[i].longitude);
      //     // }

      //     // map.setBounds(bounds);

      //     console.log(res.data);
      //     // console.log(res.data.length);
      //     // console.log(res.data[0].markerId); // 마커를 클릭시 해당 아이디 전송
      //   });
    });
  }, [searchPlace]);

  return (
    <div id="map" className="map" />
  );
}

export default KakaoMap;