import React, { useEffect } from 'react';
import './KakaoMap.css'; // 지도 CSS

const kakao = window['kakao'];

const address_list = ["서울특별시 금천구 문성로 35-7",
	"서울특별시 금천구 시흥대로 409",
	"서울특별시 금천구 가산로 106",
	"서울특별시 금천구 시흥대로 98-1",
	"서울특별시 금천구 문성로 4",
	"서울특별시 금천구 시흥대로 274",
	"서울특별시 금천구 금하로 687",
	"서울특별시 금천구 독산로50길 111",
	"서울특별시 금천구 시흥대로 143",
	"서울특별시 금천구 시흥대로71길 49",
	"서울특별시 금천구 가산로 142",
	"서울특별시 금천구 가산로7길 10",
	"서울특별시 금천구 시흥대로150길 6",
	"서울특별시 금천구 금하로 753-1",
	"서울특별시 금천구 금하로23길 24",
	"서울특별시 금천구 독산로 319",
	"서울특별시 금천구 시흥대로 357",
	"서울특별시 금천구 남부순환로126길 11",
	"서울특별시 금천구 독산로 34",
	"서울특별시 금천구 탑골로 17",
	"서울특별시 금천구 삼성산길 3",
	"서울특별시 금천구 독산로74길 24",
	"서울특별시 금천구 시흥대로57길 41",
	"서울특별시 금천구 시흥대로 88-1",
	"서울특별시 금천구 독산로65길 6",
	"서울특별시 금천구 시흥대로 106-1",
	"서울특별시 금천구 금하로1길 89",
	"서울특별시 금천구 시흥대로 339",
	"서울특별시 금천구 금하로 756",
	"서울특별시 금천구 독산로64길 12",
	"서울특별시 금천구 독산로50다길 2",
	"서울특별시 금천구 가산로 84",
	"서울특별시 금천구 독산로 286",
	"서울특별시 금천구 은행나무로 12",
	"서울특별시 금천구 벚꽃로 309",
	"서울특별시 금천구 금하로23길 23",
	"서울특별시 금천구 시흥대로62길 28",
	"서울특별시 금천구 금하로23길 39",
	"서울특별시 금천구 시흥대로63길 29",
	"서울특별시 금천구 가산디지털1로 168",
	"서울특별시 금천구 금하로23길 19",
	"서울특별시 금천구 금하로14길 10",
	"서울특별시 금천구 금하로23길 28",
	"서울특별시 금천구 시흥대로 392",
	"서울특별시 금천구 시흥대로112길 22",
	"서울특별시 금천구 금하로28길 4",
	"서울특별시 금천구 벚꽃로 309",
	"서울특별시 금천구 은행나무로 22",
	"서울특별시 금천구 가산디지털1로 2",
	"서울특별시 금천구 시흥대로63길 27"
];

const KakaoMap = ({ searchPlace }) => { // searchPlace = 검색할 장소를 나타냄
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

		for (let i = 0; i < address_list.length; i++) { // 찾은 가게 개수만큼 반복 (50개)
			let geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성

			geocoder.addressSearch(address_list[i], function (result, status) { // 주소로 좌표를 검색
				if (status === kakao.maps.services.Status.OK) {
					displayMarker(result); // 검색된 장소 마커를 표시
				}
			})
		};

		function displayMarker(place) {
			let coords = new kakao.maps.LatLng(place[0].y, place[0].x);

			let marker = new kakao.maps.Marker({
				map: map,
				position: coords
			});

			bounds.extend(coords);

			map.setLevel(5, {
				animate: {
					duration: 1000
				}
			});

			map.setBounds(bounds); // 영역 중심으로 설정

			kakao.maps.event.addListener(marker, 'click', function () {
				infowindow.setContent('<div style="padding:5px;font-size:12px;"> 우리회사 </div>');
				infowindow.open(map, marker);
			});
		}
	});

	return (
		<div className="App">
			<div id="map" className="map" />
		</div>
	);
}

export default KakaoMap;