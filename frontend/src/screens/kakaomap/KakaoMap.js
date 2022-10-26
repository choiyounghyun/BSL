import React, { useEffect } from 'react';
import './KakaoMap.css'; // 지도 CSS

const kakao = window['kakao'];

const KakaoMap = ({ searchPlace }) => { // searchPlace = 검색할 장소를 나타냄
	useEffect(() => {
		const mapContainer = document.getElementById('map'); // 지도를 표시할 div ('map' = id 명)
		const mapoptions = { // 출력할 지도의 옵션
			center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), // 지도의 중심좌표
			level: 3 // 지도의 확대 레벨
		};
		const map = new kakao.maps.Map(mapContainer, mapoptions); // 지도 생성

		let ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
		ps.keywordSearch(searchPlace, placesSearchCB); // searchPlace라는 키워드로 장소를 검색 (placeSearchCB는 장소 검색해주는 함수)

		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 }); // 마커를 클릭하면 장소명을 출력할 용도의 인포윈도우

		function placesSearchCB(data, status, pagination) { // 키워드로 장소를 검색해주는 함수
			if (status === kakao.maps.services.Status.OK) { // 정상적으로 검색이 완료된 경우
				let bounds = new kakao.maps.LatLngBounds(); // LatLngBounds 객체에 좌표를 추가

				for (let i = 0; i < data.length; i++) { // 검색된 장소 개수만큼
					displayMarker(data[i]); // 검색된 장소 마커를 표시
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				map.setBounds(bounds);
			}

			function displayMarker(place) {
				let marker = new kakao.maps.Marker({
					map: map,
					position: new kakao.maps.LatLng(place.y, place.x)
				});

				kakao.maps.event.addListener(marker, 'click', function () {
					infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
					infowindow.open(map, marker);
				});
			}
		}
	}, [searchPlace]);

	return (
		<div className="App">
			<div id="map" className="map" />
		</div>
	);
}

export default KakaoMap;