import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './KakaoMap.css' // 지도 CSS

const KakaoMap = ({ optionDataList, dongName, setDongName, latLngYX, setLatLngYX, clusterId, setClusterId, getClusterDataList, clusterMaxPage, setClusterMaxPage }) => { // searchPlace = 검색할 장소를 나타냄
  const kakao = window['kakao']
  const [centerYX, setCenterYX] = useState([0, 0])
  const [emptyBuildList, setEmptyBuildList] = useState([])

  const getCenterYX = async (y, x) => {
    setCenterYX([y, x])
  }

  const getCluster = async () => {
    const clustersURL = `https://k7c208.p.ssafy.io/api/v1/estate/clusters?dongName=${dongName}&rentPriceMin=${optionDataList.monthly[0] * 10}&rentPriceMax=${optionDataList.monthly[1] * 10}&priceMin=${optionDataList.sale[0] * 100}&priceMax=${optionDataList.sale[1] * 100}&areaMin=${optionDataList.room[0] * 4}&areaMax=${optionDataList.room[1] * 4}&leftLon=${latLngYX[0]}&rightLon=${latLngYX[1]}&topLat=${latLngYX[2]}&bottomLat=${latLngYX[3]}`

    const response = await axios.get(clustersURL)

    setEmptyBuildList(response.data)
    console.log(response.data)
  }

  const getDangNameYX = async (centerPosY, centerPosX) => {
    const dongURL = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${centerPosX}&y=${centerPosY}`
    const myAppKey = '6166cc0d53447a16f521f4fbe7c3422c'

    const response = await axios.get(dongURL, {
      headers: { Authorization: `KakaoAK ${myAppKey}` }
    })

    setDongName(response.data.documents[0].region_3depth_name)
  }

  const creatMap = (y, x) => {
    const container = document.getElementById('map')
    const center = (y === 0 && x === 0) ? new kakao.maps.LatLng(37.5518, 126.9881) : new kakao.maps.LatLng(y, x);
    const options = {
      center,
      level: 5,
      draggable: true,
    }
    const map = new kakao.maps.Map(container, options)
    map.setMaxLevel(5);
    // 지도 오른쪽 위에 확대 UI 추가
    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    // const mapTypeControl = new kakao.maps.MapTypeControl()
    // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

    const placesSearchCB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
        const centerPosYX = [(bounds.qa + bounds.pa) / 2, (bounds.ha + bounds.oa) / 2]
        getCenterYX(centerPosYX[0], centerPosYX[1])
        setLatLngYX([bounds.ha, bounds.oa, bounds.pa, bounds.qa])
        getDangNameYX(centerPosYX[0], centerPosYX[1])
      }
    }

    const displayMarker = (posData) => {
      const content = `
        <div class ="label">
          <span class="left"></span>
          <span class="center"
            style=${posData.count > 25 ? "font-size:20px;font-weight:bold" : "font-size:15px;font-weight:bold"}
          >
            ${posData.count}
          </span>
          <span class="right"></span>
        </div>
      `

      const circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(posData.latitude, posData.longitude), // 원의 중심좌표입니다
        radius: (posData.count > 20 ? 60 : 30), // 원의 반지름입니다 m 단위 이며 선 객체를 이용해서 얻어옵니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: (posData.count > 20 ? '#FF0000' : '#FFFF00'), // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일입니다
        fillColor: (posData.count > 20 ? '#FF3333' : '#FFFF59'), // 채우기 색깔입니다
        fillOpacity: 0.4  // 채우기 불투명도입니다
      })

      const customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(posData.latitude, posData.longitude),
        content: content
      })

      kakao.maps.event.addListener(circle, 'click', function () {
        getClusterDataList(posData.markerId)
        setClusterMaxPage((posData.count / 20) + 1)
      });

      circle.setMap(map)
      customOverlay.setMap(map)
    }

    if (optionDataList.place !== '') {
      const ps = new kakao.maps.services.Places()
      ps.keywordSearch(optionDataList.place, placesSearchCB)
    }

    if (emptyBuildList.length !== 0) {
      for (let i = 0; i < emptyBuildList.length; i++) {
        displayMarker(emptyBuildList[i])
      }
    }
  }

  useEffect(() => {
    creatMap(centerYX[0], centerYX[1])
    if (dongName !== '') {
      getCluster()
    }
  }, [optionDataList, emptyBuildList])

  return (
    <div id="map" />
  )
}

export default KakaoMap