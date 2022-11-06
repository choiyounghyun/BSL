import React, { useEffect } from 'react'
import './KakaoMap.css' // 지도 CSS

const KakaoMap = ({ place }) => { // searchPlace = 검색할 장소를 나타냄
  const kakao = window['kakao']

  // console.log(place)

  useEffect(() => {
    const container = document.getElementById('map')
    const center = new kakao.maps.LatLng(37.5518, 126.9881)
    const options = {
      center,
      level: 5,
      draggable: true,
    }
    const map = new kakao.maps.Map(container, options)

    let zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
  })

  return (
    <div id="map" />
  )
}

export default KakaoMap