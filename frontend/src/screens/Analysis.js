import React, { useState } from 'react';
import KakaoMap from "./kakaomap/KakaoMap";
import './Analysis.css'

const Analysis = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");
	const [sectorVisible, setSectorVisible] = useState(false);
	const [priceVisible, setPriceVisible] = useState(false);

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPlace(inputText);
		setInputText("");
	};

	return (
		<div id="map_wrap">
			<KakaoMap id="map" searchPlace={place} />
			<div id="menu_wrap" class="bg_white">
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '20px 0px' }}>
					<input
						placeholder="Search Place..."
						onChange={onChange}
						value={inputText}
					/>
					<button onSubmit={handleSubmit} type="submit">검색</button>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
					<button
						onClick={() => {
							setSectorVisible(!sectorVisible);
						}}>
						{sectorVisible ? "업종 닫기" : "업종 설정"}
					</button>
					<button
						onClick={() => {
							setPriceVisible(!priceVisible);
						}}>
						{sectorVisible ? "가격 닫기" : "가격 설정"}
					</button>
				</div>
				{sectorVisible && <div>
					<select>
						<option key="chicken" value="chicken"> 치킨 </option>
						<option key="pizza" value="pizza"> 피자 </option>
					</select>
				</div>}
			</div>
		</div>
	);
}

export default Analysis;
