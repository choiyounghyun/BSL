import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import './KakaoMap.css'; // 지도 CSS
import axios from 'axios';

const KakaoMap = ({ searchPlace, rentPriceMin, rentPriceMax, priceMin, priceMax, areaMin, areaMax, getInfoList }) => { // searchPlace = 검색할 장소를 나타냄
  const kakao = window['kakao'];

  const monthlyMin = (rentPriceMin === 0 ? 0 : rentPriceMin * 10),
    monthlyMax = (rentPriceMax === 100 ? 1000000 : rentPriceMax * 10),
    saleAndDepositMin = (rentPriceMin === 0 ? 0 : priceMin * 40),
    saleAndDepositMax = (rentPriceMax === 100 ? 1000000 : priceMax * 40),
    roomSizeMin = (areaMin === 0 ? 0 : areaMin * 2),
    roomSizeMax = (areaMax === 100 ? 200 : areaMax * 2);
  let bottomLat = 0, leftLon = 0, topLat = 0, rightLon = 0, region_dong = '';

  useEffect(() => {
    const container = document.getElementById('map');
    const center = new kakao.maps.LatLng(37.5518, 126.9881);
    const options = {
      center,
      level: 5,
      draggable: true,
    };
    const map = new kakao.maps.Map(container, options);

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let ps = new kakao.maps.services.Places();
    if (searchPlace.length !== 0) {
      ps.keywordSearch(searchPlace, placesSearchCB);
    }
    else;

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        map.setLevel(3);

        let swLatLng = bounds.getSouthWest(); // 영역의 남서쪽 좌표
        let neLatLng = bounds.getNorthEast(); // 영역의 북동쪽 좌표


        bottomLat = swLatLng.getLat();
        leftLon = swLatLng.getLng();

        topLat = neLatLng.getLat();
        rightLon = neLatLng.getLng();
      }
    }

    function displayMarker(y, x, mId, dName, rpMin, rpMax, pMin, pMax, aMin, aMax, lLon, rLon, tLat, bLat) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(y, x)
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        // 해당 클러스트 내에 있는 매물 정보를 axios.get 하고
        // 그 데이터를 변수에 저장시켜 부모 js 인 Analysis에 전달해야한다.
        const clustersData_url = `https://k7c208.p.ssafy.io/api/v1/estate/articles?markerId=${mId}&page=1&dongName=${dName}&rentPriceMin=${rpMin}&rentPriceMax=${rpMax}&priceMin=${pMin}&priceMax=${pMax}&areaMin=${aMin}&areaMax=${aMax}&leftLon=${lLon}&rightLon=${rLon}&topLat=${tLat}&bottomLat=${bLat}`
        axios
          .get(clustersData_url)
          .then((res) => {
            console.log(res.data.articles)
            if (res.data.articles.length !== 0) {
              getInfoList(res.data.articles);
            }
          });
      });
    }

    kakao.maps.event.addListener(map, 'center_changed', function () {
      let latlng = map.getCenter();
      map.setCenter(latlng);

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
          let clusters_url = `https://k7c208.p.ssafy.io/api/v1/estate/clusters?dongName=${region_dong}&rentPriceMin=${monthlyMin}&rentPriceMax=${monthlyMax}&priceMin=${saleAndDepositMin}&priceMax=${saleAndDepositMax}&areaMin=${roomSizeMin}&areaMax=${roomSizeMax}&leftLon=${leftLon}&rightLon=${rightLon}&topLat=${topLat}&bottomLat=${bottomLat}`;

          await axios
            .get(clusters_url)
            .then((res) => {
              console.log(res.data);

              let bounds = new kakao.maps.LatLngBounds();

              for (let i = 0; i < res.data.length; i++) {
                bounds.extend(new kakao.maps.LatLng(res.data[i].latitude, res.data[i].longitude));
                displayMarker(res.data[i].latitude, res.data[i].longitude, res.data[i].markerId, region_dong, monthlyMin, monthlyMax, saleAndDepositMin, saleAndDepositMax, roomSizeMin, roomSizeMax, leftLon, rightLon, topLat, bottomLat);
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
    });
  }, [searchPlace]);

  return (
    <div id="map" />
  );
}

export default KakaoMap;