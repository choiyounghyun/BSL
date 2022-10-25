import React, { useEffect } from 'react';
import './KakaoMap.css';

const kakao = window['kakao'];

const KakaoMap = ({ searchPlace }) => {
	useEffect(() => {
		let markers = [];

		const mapContainer = document.getElementById('map');
		const mapoptions = {
			center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
			level: 3
		};
		const map = new kakao.maps.Map(mapContainer, mapoptions); //맵생성

		let ps = new kakao.maps.services.Places();

		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

		ps.keywordSearch(searchPlace, placesSearchCB);

		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {
				let bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					displayMarker(data[i]);
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