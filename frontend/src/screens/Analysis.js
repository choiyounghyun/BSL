import React, { useState } from 'react';
import KakaoMap from "./kakaomap/KakaoMap";
import './Analysis.css'

const Analysis = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");

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
			<div id="menu_wrap" class="bg_white" onSubmit={handleSubmit}>
				<input
					placeholder="Search Place..."
					onChange={onChange}
					value={inputText}
				/>
				<button type="submit">검색</button>
			</div>
		</div>
	);
}

export default Analysis;